# Smartspeak

## Documento de diseño

## Diseño de pruebas

## Bitácora de ejecución de pruebas

## Solución implantada
Este proyecto cuenta con 2 ambientes: _desarrollo_ y _producción_; cada uno es hosteado de forma automática y separada gracias al archivo **deploy.yaml** dependiendo la rama a la que se le esté haciendo merge. Se crea una imagen en **Docker Hub** y **Lighstail AWS** la procesa y ejecuta en el _endpoint_ generado. Cualquier deploy **SOLO** funcionará una vez pase todas las pruebas de _Typrescript_ y _ESLINT_ dentro del archivo **ci.yaml**

A continuación, adjunto los links de ambos ambientes:
- Desarrollo: https://smartspeak-dev.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/
- Producción: https://smartspeak.lcuoodnsn630q.us-east-1.cs.amazonlightsail.com/

Cabe mencionar también que para hacer uso de las respuestas de ChatGPT constantemente fue gracias a que se siguió el mismo proceso para subir el archivo de _python_ donde incluye toda la lógica para lograr un comunicación en tiempo real.

## Plan de proyecto
### Documento de planeación
### Documento de requerimientos
### Lecciones aprendidas
### Encuestas a Stakeholders
### Carta de agradecimiento y entrega final a Stakeholders
### Presentaciones de avance por Sprint
### Valor ganado

## Funcionalidad y presentación
### Video de la funcionalidad de la aplicación
### Presentación final
