// Corre al final de npm run build: de la carpeta dist solo deja las fotos que el catálogo o la historia usan.
// Las fotos sin producto, como las que aún no tienen nombre y precio, no se publican.
import { existsSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(project, 'dist');
const read = (file) => JSON.parse(readFileSync(join(project, 'src/data', file), 'utf8'));
const decode = (path) => {
  try {
    return decodeURI(path);
  } catch {
    return path;
  }
};

const light = read('fotos-livianas.generated.json');
const keep = new Set(
  [...read('products.json').map((p) => p.image), read('story.json').photo]
    .filter((path) => path && path.startsWith('/'))
    .map((path) => light[decode(path)] || decode(path)),
);

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });
}

let removed = 0;
for (const folder of ['Imagenes Catalogo', 'Imagenes Livianas']) {
  for (const file of listFiles(join(dist, folder))) {
    if (!keep.has(`/${relative(dist, file).split(sep).join('/')}`)) {
      rmSync(file);
      removed++;
    }
  }
}
const left = ['Imagenes Catalogo', 'Imagenes Livianas'].flatMap((folder) => listFiles(join(dist, folder))).length;
console.log(`Fotos publicadas: ${left}. Sin publicar: ${removed}.`);
