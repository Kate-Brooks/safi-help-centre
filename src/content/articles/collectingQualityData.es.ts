import type { ArticleContent } from '../types';

/**
 * Spanish content for "Collecting quality data".
 * Mirrors the English structure and section ids so anchor links and the
 * "On this page" stepper survive a language switch. Screenshots are shared
 * with the other locales (English screenshots for now).
 *
 * Localisation note: the brand "Safi AI" is kept as-is; the generic term
 * "AI" is translated to the standard Spanish "IA".
 */
export const collectingQualityDataEs: ArticleContent = {
  title: 'Recopilar datos de calidad',
  summary:
    'Usa Safi AI para analizar la calidad del material, generar un informe de calidad con IA y comparar los resultados con tus especificaciones de material.',
  transcript: `Bienvenido a Safi AI Control de calidad. En este vídeo te mostraremos cómo analizar la calidad del material y generar informes con IA usando Safi AI.

Primero, descarga la app Safi AI desde la App Store. Para un mejor rendimiento recomendamos usar un iPhone 14 Pro o más reciente.

Luego abre la app y ve a Control de calidad. Si la carga ya existe en la app, búscala y toca Analizar ahora, o toca la carga para ver más detalles. Después toca ‘Analizar’ en la parte inferior.

Puedes elegir la forma del material y recomendamos activar el ‘Modo sin conexión’ si tu planta tiene datos o señal débiles. El modo sin conexión guarda de forma segura las fotos en el navegador del teléfono para que puedas subirlas más tarde por Wi-Fi. Después, toca ‘Abrir cámara’ para empezar a fotografiar el material.

Colócate frente al material y apunta la cámara hacia él. Safi te guiará a la distancia y el ángulo correctos antes de tomar la foto automáticamente.

Safi admite captura manual y automática, pero recomendamos la captura automática para un flujo de trabajo rápido y fluido.

Puedes revisar las fotos en cualquier momento en la galería de fotos. Si se detecta un problema, aparecerá un indicador rojo o amarillo junto al botón de la galería y en la foto afectada dentro de la vista de galería.

Los ajustes, como el Modo sin conexión o las vibraciones de alerta, están disponibles en la esquina superior derecha. El flash está disponible para entornos con poca luz o turnos nocturnos.

Para obtener los resultados más precisos, recomendamos capturar al menos 10 fotos por carga. Evita fotografiar el lado muy comprimido de la bala y céntrate en las caras más planas de la bala.

Cuando estés satisfecho con la cobertura fotográfica, completa el informe para generar tu análisis con IA.

Las fotos capturadas en Modo sin conexión pueden subirse más tarde por Wi-Fi, desde la página del informe o desde la página de inicio de Control de calidad.

Una vez analizadas las fotos, verás la tabla de composición que compara las especificaciones de material configuradas en los ajustes con los resultados reales de la IA.

Para revisar las fotos analizadas por la IA, abre el informe y ve a la pestaña ‘Fotos’. Selecciona ‘Bala IA’, y verás todas las fotos tomadas durante la sesión. Te mostraremos el área analizada del contorno de la bala y los materiales que la IA ha detectado. Puedes activarlos y desactivarlos así.

Si has notado un problema con la IA, como que se ha detectado el objeto equivocado, mantén pulsada la foto y podrás dejar un comentario. Esto irá directamente a nuestro equipo de machine learning para que podamos seguir mejorando los datos de tu planta.

También puedes subir fotos del dispositivo para analizarlas en los pasos de configuración, o mediante la galería de fotos del informe tocando el botón de subida.

Los informes se pueden compartir fácilmente con colegas y puedes descargar un PDF del informe con todas las fotos y los datos.

Si tu planta no importa las cargas en Safi con antelación, puedes crear las cargas a medida que llegan al patio. En Calidad, selecciona la opción crear carga. Asegúrate de elegir la especificación de material correcta para dar a tus informes un contexto significativo - más información en un vídeo aparte.`,
  sections: [
    {
      id: 'before-you-begin',
      heading: 'Antes de empezar',
      display: 'alert',
      blocks: [
        {
          type: 'paragraph',
          body: 'Descarga la [app Safi AI](https://apps.apple.com/gb/app/safi-ai/id6757709968) desde la App Store. Para un mejor rendimiento recomendamos usar un **iPhone 14 Pro o más reciente**.',
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Inicia un análisis',
      steps: [
        {
          title: 'Abre la app y ve a Control de calidad',
          blocks: [
            {
              type: 'paragraph',
              body: 'Si la carga ya existe, búscala y toca **Analizar ahora**, o abre la carga para ver sus detalles y toca **Analizar** en la parte inferior.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Lista de cargas en Control de calidad con la acción Analizar ahora en una carga.',
                src: 'screenshots/collecting-quality-data/01-analyse.png',
              },
            },
          ],
        },
        {
          title: 'Crea las cargas a medida que llegan',
          blocks: [
            {
              type: 'paragraph',
              body: 'Si la carga aún no existe, puedes crear y analizar las cargas a medida que llegan al patio.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'En Control de calidad, selecciona **Crear carga** o **Iniciar análisis**.',
                'Introduce los **detalles de la carga** y elige la **especificación de material** correcta para dar a tus informes un contexto significativo - más información en una guía aparte.',
                'Después guarda la carga o toca **Abrir cámara** para empezar a analizar el material.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Creación de una carga a su llegada y elección de su especificación de material.',
                src: 'screenshots/collecting-quality-data/11-create-load.png',
              },
            },
          ],
        },
        {
          title: 'Configura y abre la cámara',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Elige la **forma del material**.',
                'Activa el **Modo sin conexión** si la señal es débil.',
                '**Abre la cámara** para empezar a fotografiar el material.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'El modo sin conexión **guarda de forma segura** las fotos en tu teléfono y pueden **subirse más tarde por Wi-Fi**, así no tienes que preocuparte por perder fotos.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Pantalla de configuración de la cámara con la forma del material, el interruptor de Modo sin conexión y el botón Abrir cámara.',
                src: 'screenshots/collecting-quality-data/02-set-up.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'taking-photos',
      heading: 'Fotografiar el material',
      steps: [
        {
          title: 'Encuadra el material',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                '**Colócate frente al material**, apuntando la cámara hacia él.',
                'Safi te guía a la **distancia y el ángulo correctos**, y luego te permite tomar la foto cuando el encuadre es correcto.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'La cámara guía al operario a la distancia y el ángulo correctos para encuadrar la bala.',
                src: 'screenshots/collecting-quality-data/03-framing.png',
                caption:
                  'El marco naranja y la alerta te pedirán que ajustes la distancia o el ángulo; el marco verde indica que se puede capturar una foto',
              },
            },
          ],
        },
        {
          title: 'Captura automática o manual',
          blocks: [
            {
              type: 'paragraph',
              body: 'Cuando sostienes el dispositivo a la distancia y el ángulo correctos, el marco de la bala se vuelve verde.',
            },
            {
              type: 'list',
              items: [
                'El modo **Manual** te da el control sobre la captura de fotos.',
                'El modo **Automático** captura la foto por ti (recomendado para un flujo de trabajo rápido y fluido).',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Pantalla de la cámara con el interruptor entre captura Automática y Manual.',
                src: 'screenshots/collecting-quality-data/04-auto-manual.png',
              },
            },
          ],
        },
        {
          title: 'Galería de fotos',
          blocks: [
            {
              type: 'list',
              items: [
                'Puedes **revisar las fotos** en cualquier momento tocando el botón de la galería de fotos (abajo a la izquierda en la pantalla de la cámara).',
                'Si se **detecta un problema**, aparece un indicador rojo o amarillo junto al botón de la galería y en la foto afectada en la vista de galería.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Galería de fotos que muestra las fotos analizadas con los indicadores de estado de la IA.',
                src: 'screenshots/collecting-quality-data/05-library.png',
              },
            },
          ],
        },
        {
          title: 'Ajustes y herramientas de la cámara',
          blocks: [
            {
              type: 'list',
              items: [
                'Los **Ajustes** como el Modo sin conexión o las vibraciones de alerta están disponibles en la esquina superior derecha.',
                'El **Flash** está disponible para entornos con poca luz o turnos nocturnos.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Pantalla de la cámara con los controles de ajustes y flash en la esquina superior derecha.',
                src: 'screenshots/collecting-quality-data/06-settings.png',
              },
            },
          ],
        },
        {
          title: 'Completa el análisis',
          blocks: [
            {
              type: 'paragraph',
              body: 'Cuando estés satisfecho con la cobertura fotográfica, **completa el informe** para generar tu análisis con IA.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Completar el análisis para generar el informe con IA.',
                src: 'screenshots/collecting-quality-data/07-complete.png',
              },
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Importante para una mejor cobertura',
              items: [
                '**Captura al menos 10 fotos por carga** - cuantas más fotos tomes, más representativos serán los resultados de la IA para toda la carga.',
                '**Evita fotografiar el lado muy comprimido de la bala** y céntrate en las caras más planas de la bala.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Las fotos capturadas en Modo sin conexión pueden subirse más tarde por Wi-Fi, desde la página del informe o desde la página de inicio de Control de calidad.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-your-results',
      heading: 'Consulta tus resultados',
      steps: [
        {
          title: 'Revisa la tabla de composición',
          blocks: [
            {
              type: 'paragraph',
              body: 'Una vez analizadas las fotos, verás la **tabla de composición** que compara las **especificaciones de material** configuradas en los Ajustes con los resultados reales de la IA.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Para revisar las fotos tomadas durante la sesión, ve a la **pestaña Fotos** y selecciona el álbum de IA.',
                'Para cada foto se muestran el área analizada y los **materiales detectados por la IA**, que puedes activar y desactivar.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Tabla de composición que compara las especificaciones de material objetivo con los resultados de la IA.',
                src: 'screenshots/collecting-quality-data/08-composition.png',
              },
            },
            {
              type: 'callout',
              variant: 'tip',
              body: '**Mejora la precisión de la IA para tu material** enviando comentarios directamente a nuestro equipo de Machine Learning. Mantén pulsada la foto en el móvil o haz clic derecho en el escritorio para dejar un comentario.',
            },
          ],
        },
        {
          title: 'Analiza fotos subidas',
          blocks: [
            {
              type: 'paragraph',
              body: '**Sube fotos** para analizarlas desde tu dispositivo en los **pasos de configuración** o mediante la **galería de fotos del informe** usando el botón de subida.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Subida de fotos del dispositivo para su análisis desde la pantalla de configuración.',
                src: 'screenshots/collecting-quality-data/09-upload.png',
              },
            },
          ],
        },
        {
          title: 'Comparte y descarga informes',
          blocks: [
            {
              type: 'paragraph',
              body: 'Los informes se pueden **compartir** fácilmente con colegas y puedes **descargar un PDF** del informe con las fotos y los datos.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Descarga del informe en PDF y su compartición, con el selector de idioma.',
                src: 'screenshots/collecting-quality-data/10-share.png',
              },
            },
          ],
        },
      ],
    },
  ],
};
