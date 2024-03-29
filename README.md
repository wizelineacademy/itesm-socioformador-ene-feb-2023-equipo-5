# Smartspeak

## Documento de diseño
https://www.figma.com/file/wYKfbir7roSzvYTGnQEOzN/MockUp-Wizeline?type=design&node-id=314-112&t=0wp4uBYoJLay8Ccx-0

## Diseño de pruebas/Bitácora de ejecución de pruebas
https://docs.google.com/spreadsheets/d/1lKvFfq4BLqR7b_Fbv0yDuuKQcO6MkgmoCL0e_23PGXE/edit?usp=sharing

## Solución implantada
Este proyecto cuenta con 2 ambientes: _desarrollo_ y _producción_; cada uno es hosteado de forma automática y separada gracias al archivo **deploy.yaml** dependiendo la rama a la que se le esté haciendo merge. Se crea una imagen en **Docker Hub** y **Lighstail AWS** la procesa y ejecuta en el _endpoint_ generado. 
Cualquier deploy solo funcionará una vez pase **TODAS** las pruebas de _Typrescript_ y _ESLINT_ dentro del archivo **ci.yaml**

A continuación, adjunto los links de ambos ambientes:
- Desarrollo: https://smartspeak-dev.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/
- Producción: https://smartspeak.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/

Cabe mencionar también que para hacer uso de las respuestas de ChatGPT constantemente fue gracias a que se siguió el mismo proceso para subir el archivo de _python_ donde incluye toda la lógica para lograr un comunicación en tiempo real.

## Plan de proyecto
### Documento de planeación:
https://docs.google.com/document/d/1x7r9pel1f0tC4UPimJCReQ3KPQZidaiuQchm5nJjAUE/edit?usp=sharing
### Documento de requerimientos:
https://docs.google.com/document/d/1J8SHteuyGH6KzhUPS3FmIowA-TKATM3_ufGUSWjWCfs/edit?usp=sharing
### Lecciones aprendidas:
https://docs.google.com/spreadsheets/d/13xbv4ugGYcY3Yh_JNzXPd_vBfug8pyURjB6Jh9Lok04/edit?usp=sharing
### Encuestas a Stakeholders:
https://forms.gle/515M8fifjBAMzNCT9
### Carta de agradecimiento y entrega final a Stakeholders:
https://docs.google.com/document/d/1A4lWP4h_SyxWRw3RLyeNE4c1dxoDc5NpXl8tBec49Ww/edit?usp=sharing
### Presentaciones de avance por Sprint:
https://www.canva.com/design/DAFf__oThV0/GcvMk5L7ohCPtxv7N4JiBg/edit?utm_content=DAFf__oThV0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
### Valor ganado:
https://docs.google.com/spreadsheets/d/1Q0YjnjjwmRsn0ISP-wO954sikOFwn2ZY/edit#gid=101259626

## Funcionalidad y presentación

### Video de la funcionalidad de la aplicación
https://drive.google.com/file/d/1FweqFvWnag446kP1zemjFbu66wLIezUA/view?usp=sharing
### Presentación final
https://www.canva.com/design/DAFloRdPzdA/BXtGtKEQATPPahzctzSi3w/edit?utm_content=DAFloRdPzdA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
