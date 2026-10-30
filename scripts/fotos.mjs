// Revisa las fotos del catálogo. Se ejecuta con: npm run fotos
// (también corre solo antes de npm run dev y npm run build, con --silencio).
// - Si una foto es pesada, crea una copia liviana en "public/Imagenes Livianas" (nunca toca el original)
//   y anota la equivalencia en src/data/fotos-livianas.generated.json: la web la usa sola.
// - Avisa qué fotos aún no tienen producto y qué productos apuntan a una foto que no existe.
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const project = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(project, 'public');
const sourceDir = join(publicDir, 'Imagenes Catalogo');
const lightDir = join(publicDir, 'Imagenes Livianas');
const manifest = join(project, 'src/data/fotos-livianas.generated.json');
const quiet = process.argv.includes('--silencio');
const MAX_KB = 300;
const MAX_SIDE = 1400;

function listPhotos(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return listPhotos(full);
    return /\.(jpe?g|png|webp)$/i.test(entry.name) ? [full] : [];
  });
}

const toWeb = (full) => `/${relative(publicDir, full).split(sep).join('/')}`;
const decode = (path) => {
  try {
    return decodeURI(path);
  } catch {
    return path;
  }
};
const products = JSON.parse(readFileSync(join(project, 'src/data/products.json'), 'utf8'));
const story = JSON.parse(readFileSync(join(project, 'src/data/story.json'), 'utf8'));
const used = new Set([...products.map((p) => p.image), story.photo].filter(Boolean).map(decode));
const photos = listPhotos(sourceDir);
const lightPhotos = {};
const pending = [];
const log = (...args) => !quiet && console.log(...args);

for (const photo of photos) {
  const kb = statSync(photo).size / 1024;
  const { width, height } = await sharp(photo).metadata();
  const path = toWeb(photo);
  if (kb > MAX_KB || Math.max(width, height) > MAX_SIDE) {
    const light = join(lightDir, relative(sourceDir, photo)).replace(/\.\w+$/, '.jpg');
    if (!existsSync(light) || statSync(light).mtimeMs < statSync(photo).mtimeMs) {
      mkdirSync(dirname(light), { recursive: true });
      await sharp(photo)
        .rotate()
        .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(light);
    }
    lightPhotos[path] = toWeb(light);
    log(`Copia liviana: ${path} (${Math.round(kb)} KB) → ${Math.round(statSync(light).size / 1024)} KB`);
  }
  if (!used.has(path)) pending.push(path);
}
writeFileSync(manifest, `${JSON.stringify(lightPhotos, null, 2)}\n`);

// La web no se detiene por esto, pero siempre se avisa aunque sea en silencio.
const missing = products.filter((p) => p.image?.startsWith('/') && !existsSync(join(publicDir, decode(p.image))));
missing.forEach((p) => console.warn(`AVISO: ${p.name} apunta a una foto que no existe: ${p.image}`));

log(`\nFotos encontradas: ${photos.length}`);
log(`Fotos sin producto: ${pending.length}`);
pending.forEach((path) => log(`  "image": "${path}"`));
