import type { ArticleContent } from '../types';

/**
 * Italian content for "Collecting quality data".
 * Mirrors the English structure and section ids so anchor links and the
 * "On this page" stepper survive a language switch. Screenshots are shared
 * with the other locales (English screenshots for now).
 */
export const collectingQualityDataIt: ArticleContent = {
  title: 'Raccogliere dati di qualità',
  summary:
    'Usa Safi AI per analizzare la qualità del materiale, generare un report di qualità AI e confrontare i risultati con le tue specifiche del materiale.',
  transcript: `Benvenuto in Safi AI Controllo qualità. In questo video ti mostreremo come analizzare la qualità del materiale e generare report AI con Safi AI.

Per prima cosa, scarica l’app Safi AI dall’App Store. Per prestazioni ottimali consigliamo di usare un iPhone 14 Pro o più recente.

Poi apri l’app e vai a Controllo qualità. Se il carico esiste già nell’app, trovalo e tocca Analizza ora, oppure tocca il carico per vedere maggiori dettagli. Poi tocca ‘Analizza’ in basso.

Puoi scegliere la forma del materiale e consigliamo di attivare la ‘Modalità offline’ se il tuo sito ha dati o segnale deboli. La modalità offline salva in sicurezza le foto nel browser del telefono così puoi caricarle in seguito tramite Wi-Fi. Poi tocca ‘Apri fotocamera’ per iniziare a fotografare il materiale.

Mettiti di fronte al materiale e punta la fotocamera verso di esso. Safi ti guiderà alla distanza e angolazione corrette prima di scattare automaticamente la foto.

Safi supporta sia l’acquisizione manuale che automatica, ma consigliamo l’acquisizione automatica per un flusso di lavoro rapido e senza interruzioni.

Puoi rivedere le foto in qualsiasi momento nella galleria foto. Se viene rilevato un problema, accanto al pulsante della galleria e sulla foto interessata compare un indicatore rosso o giallo nella vista galleria.

Le impostazioni, come la Modalità offline o le vibrazioni di avviso, sono accessibili in alto a destra. Il flash è disponibile per ambienti con poca luce o turni notturni.

Per risultati più accurati, consigliamo di scattare almeno 10 foto per carico. Evita di fotografare il lato molto compresso della balla e concentrati invece sulle facce più piatte della balla.

Quando sei soddisfatto della copertura fotografica, completa il report per generare la tua analisi AI.

Le foto acquisite in modalità offline possono essere caricate in seguito tramite Wi-Fi, dalla pagina del report o dalla home page del Controllo qualità.

Una volta analizzate le foto, vedrai la tabella di composizione che confronta le specifiche del materiale impostate nelle impostazioni con i risultati effettivi dell’AI.

Per esaminare le foto analizzate dall’AI, apri il report e vai alla scheda ‘Foto’. Seleziona ‘Balla AI’, poi vedrai tutte le foto scattate durante la sessione. Ti mostreremo l’area analizzata del contorno della balla e i materiali rilevati dall’AI. Puoi attivarli e disattivarli così.

Se hai notato un problema con l’AI, ad esempio è stato rilevato l’oggetto sbagliato, tieni premuta la foto e puoi lasciare un commento. Questo andrà direttamente al nostro team di machine learning così possiamo continuare a migliorare i dati del tuo sito.

Puoi anche caricare le foto dal dispositivo da analizzare nei passaggi di configurazione, o tramite la galleria foto del report toccando il pulsante di caricamento.

I report possono essere facilmente condivisi con i colleghi e puoi scaricare un PDF del report contenente tutte le foto e i dati.

Se il tuo sito non importa i carichi in Safi in anticipo, puoi creare i carichi man mano che arrivano in piazzale. In Qualità, seleziona l’opzione crea carico. Assicurati di scegliere la specifica del materiale corretta per dare ai tuoi report un contesto significativo - maggiori informazioni in un video separato.`,
  sections: [
    {
      id: 'before-you-begin',
      heading: 'Prima di iniziare',
      display: 'alert',
      blocks: [
        {
          type: 'paragraph',
          body: 'Scarica l’[app Safi AI](https://apps.apple.com/gb/app/safi-ai/id6757709968) dall’App Store. Per prestazioni ottimali consigliamo di usare un **iPhone 14 Pro o più recente**.',
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Avvia un’analisi',
      steps: [
        {
          title: 'Apri l’app e vai a Controllo qualità',
          blocks: [
            {
              type: 'paragraph',
              body: 'Se il carico esiste già, trovalo e tocca **Analizza ora**, oppure apri il carico per vederne i dettagli e tocca **Analizza** in basso.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Elenco dei carichi in Controllo qualità con l’azione Analizza ora su un carico.',
                src: 'screenshots/collecting-quality-data/01-analyse.png',
              },
            },
          ],
        },
        {
          title: 'Crea i carichi al loro arrivo',
          blocks: [
            {
              type: 'paragraph',
              body: 'Se il carico non esiste ancora, puoi creare e analizzare i carichi man mano che arrivano in piazzale.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'In Controllo qualità, seleziona **Crea carico** o **Avvia analisi**.',
                'Inserisci i **dettagli del carico** e scegli la **specifica del materiale** corretta per dare ai tuoi report un contesto significativo - maggiori informazioni in una guida separata.',
                'Poi salva il carico o tocca **Apri fotocamera** per iniziare ad analizzare il materiale.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Creazione di un carico all’arrivo e scelta della sua specifica del materiale.',
                src: 'screenshots/collecting-quality-data/11-create-load.png',
              },
            },
          ],
        },
        {
          title: 'Configura e apri la fotocamera',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Scegli la **forma del materiale**.',
                'Attiva la **Modalità offline** se il segnale è debole.',
                '**Apri la fotocamera** per iniziare a fotografare il materiale.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'La modalità offline **salva in sicurezza** le foto sul telefono e possono essere **caricate in seguito tramite Wi-Fi**, così non devi preoccuparti di perdere le foto.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Schermata di configurazione della fotocamera con la forma del materiale, l’interruttore Modalità offline e il pulsante Apri fotocamera.',
                src: 'screenshots/collecting-quality-data/02-set-up.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'taking-photos',
      heading: 'Fotografare il materiale',
      steps: [
        {
          title: 'Inquadra il materiale',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                '**Mettiti di fronte al materiale**, puntando la fotocamera verso di esso.',
                'Safi ti guida alla **distanza e angolazione corrette**, poi ti consente di scattare la foto quando l’inquadratura è giusta.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'La fotocamera guida l’operatore alla distanza e angolazione corrette per inquadrare la balla.',
                src: 'screenshots/collecting-quality-data/03-framing.png',
                caption:
                  'Il riquadro arancione e l’avviso ti chiederanno di regolare la distanza o l’angolazione; il riquadro verde indica che è possibile scattare una foto',
              },
            },
          ],
        },
        {
          title: 'Scegli l’acquisizione automatica o manuale',
          blocks: [
            {
              type: 'paragraph',
              body: 'Quando tieni il dispositivo alla distanza e angolazione corrette, il riquadro della balla diventa verde.',
            },
            {
              type: 'list',
              items: [
                'La modalità **Manuale** ti dà il controllo sullo scatto delle foto.',
                'La modalità **Automatica** scatta la foto per te (consigliata per un flusso di lavoro rapido e senza interruzioni).',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Schermata della fotocamera con l’interruttore tra acquisizione Automatica e Manuale.',
                src: 'screenshots/collecting-quality-data/04-auto-manual.png',
              },
            },
          ],
        },
        {
          title: 'Galleria foto',
          blocks: [
            {
              type: 'list',
              items: [
                'Puoi **rivedere le foto** in qualsiasi momento toccando il pulsante della galleria foto (in basso a sinistra nella schermata della fotocamera).',
                'Se viene **rilevato un problema**, accanto al pulsante della galleria e sulla foto interessata compare un indicatore rosso o giallo nella vista galleria.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Galleria foto che mostra le foto analizzate con gli indicatori di stato dell’AI.',
                src: 'screenshots/collecting-quality-data/05-library.png',
              },
            },
          ],
        },
        {
          title: 'Impostazioni e strumenti della fotocamera',
          blocks: [
            {
              type: 'list',
              items: [
                'Le **Impostazioni** come la Modalità offline o le vibrazioni di avviso sono accessibili in alto a destra.',
                'Il **Flash** è disponibile per ambienti con poca luce o turni notturni.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Schermata della fotocamera con i controlli delle impostazioni e del flash in alto a destra.',
                src: 'screenshots/collecting-quality-data/06-settings.png',
              },
            },
          ],
        },
        {
          title: 'Completa l’analisi',
          blocks: [
            {
              type: 'paragraph',
              body: 'Quando sei soddisfatto della copertura fotografica, **completa il report** per generare la tua analisi AI.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Completamento dell’analisi per generare il report AI.',
                src: 'screenshots/collecting-quality-data/07-complete.png',
              },
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Importante per la migliore copertura',
              items: [
                '**Scatta almeno 10 foto per carico** - più foto scatti, più i risultati dell’AI sono rappresentativi dell’intero carico.',
                '**Evita di fotografare il lato molto compresso della balla** e concentrati sulle facce più piatte della balla.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Le foto acquisite in modalità offline possono essere caricate in seguito tramite Wi-Fi, dalla pagina del report o dalla home page del Controllo qualità.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-your-results',
      heading: 'Leggi i risultati',
      steps: [
        {
          title: 'Esamina la tabella di composizione',
          blocks: [
            {
              type: 'paragraph',
              body: 'Una volta analizzate le foto, vedrai la **tabella di composizione** che confronta le **specifiche del materiale** impostate nelle Impostazioni con i risultati effettivi dell’AI.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Per rivedere le foto scattate durante la sessione, vai alla **scheda Foto** e seleziona l’album AI.',
                'Per ogni foto vengono mostrati l’area analizzata e i **materiali rilevati dal sistema AI**, che puoi attivare e disattivare.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Tabella di composizione che confronta le specifiche del materiale target con i risultati dell’AI.',
                src: 'screenshots/collecting-quality-data/08-composition.png',
              },
            },
            {
              type: 'callout',
              variant: 'tip',
              body: '**Migliora la precisione dell’AI per il tuo materiale** inviando feedback direttamente al nostro team di Machine Learning. Tieni premuta la foto sul cellulare o fai clic con il tasto destro su desktop per lasciare un commento.',
            },
          ],
        },
        {
          title: 'Analizza le foto caricate',
          blocks: [
            {
              type: 'paragraph',
              body: '**Carica le foto** da analizzare dal tuo dispositivo nei **passaggi di configurazione** o tramite la **galleria foto del report** usando il pulsante di caricamento.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Caricamento delle foto dal dispositivo per l’analisi dalla schermata di configurazione.',
                src: 'screenshots/collecting-quality-data/09-upload.png',
              },
            },
          ],
        },
        {
          title: 'Condividi e scarica i report',
          blocks: [
            {
              type: 'paragraph',
              body: 'I report possono essere facilmente **condivisi** con i colleghi e puoi **scaricare un PDF** del report contenente le foto e i dati.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Download del report in PDF e condivisione, con il selettore della lingua.',
                src: 'screenshots/collecting-quality-data/10-share.png',
              },
            },
          ],
        },
      ],
    },
  ],
};
