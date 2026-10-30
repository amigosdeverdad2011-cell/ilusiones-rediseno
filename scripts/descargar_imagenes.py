#!/usr/bin/env python3
"""Descarga al equipo las imágenes enlazadas por el catálogo de Ilusiones.
Requiere Internet al ejecutar. No modifica el sitio publicado.
No reemplaza rutas en caso de error. Respalda primero el catálogo JSON.
"""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from urllib.parse import urlparse, unquote
import json
import shutil
import datetime

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src' / 'data' / 'products.json'
DEST = ROOT / 'public' / 'products'
DEST.mkdir(parents=True, exist_ok=True)

products = json.loads(DATA.read_text(encoding='utf-8'))
backup = ROOT / 'src' / 'data' / f"products.respaldo.{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
shutil.copy2(DATA, backup)
report = {'back_up': str(backup.relative_to(ROOT)), 'ok': [], 'failed': [], 'skipped': []}

for item in products:
    url = item.get('image','')
    if not url.startswith('https://ilusiones-cajamarca.amigosdeverdad2011.chatgpt.site/'):
        report['skipped'].append({'name':item.get('name'),'reason':'No es URL del sitio original'})
        continue
    filename = Path(unquote(urlparse(url).path)).name
    if not filename or filename in ('.','..'):
        report['failed'].append({'name':item.get('name'),'url':url,'error':'nombre inválido'})
        continue
    target = DEST / filename
    try:
        if not target.exists():
            req = Request(url, headers={'User-Agent':'Mozilla/5.0 (compatible; IlusionesBackup/1.0)'})
            with urlopen(req,timeout=25) as res:
                data = res.read()
                content_type = res.headers.get('Content-Type','').lower()
                if 'image/' not in content_type or len(data) < 500:
                    raise ValueError('La respuesta no parece ser una imagen')
                target.write_bytes(data)
        item['image'] = '/products/' + filename
        report['ok'].append({'name':item.get('name'),'file':str(target.relative_to(ROOT))})
        print('OK:', item.get('name'))
    except (HTTPError, URLError, TimeoutError, ValueError, OSError) as exc:
        report['failed'].append({'name':item.get('name'),'url':url,'error':str(exc)})
        print('FALLÓ:', item.get('name'),'-',exc)

DATA.write_text(json.dumps(products,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
report_path = ROOT / 'REPORTE_DESCARGA_FOTOS.json'
report_path.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(f"\nDescargadas: {len(report['ok'])}; fallidas: {len(report['failed'])}; omitidas: {len(report['skipped'])}.")
print('Reporte:', report_path)
print('Copia de seguridad:', backup)
