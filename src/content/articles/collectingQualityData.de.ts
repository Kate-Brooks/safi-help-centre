import type { ArticleContent } from '../types';

/**
 * German content for "Collecting quality data" / „Qualitätsdaten erfassen".
 * Mirrors the English structure (same section ids, same step order, same screenshots).
 */
export const collectingQualityDataDe: ArticleContent = {
  title: 'Qualitätsdaten erfassen',
  summary:
    'Analysieren Sie mit Safi AI die Materialqualität, erstellen Sie einen KI-Qualitätsbericht und prüfen Sie die Ergebnisse anhand Ihrer Materialspezifikationen.',
  transcript: `Willkommen bei der Qualitätskontrolle von Safi AI. In diesem Video zeigen wir Ihnen, wie Sie mit Safi AI die Materialqualität analysieren und KI-Berichte erstellen.

Laden Sie zunächst die Safi AI App aus dem App Store herunter. Für die beste Leistung empfehlen wir ein iPhone 14 Pro oder neuer.

Öffnen Sie dann die App und gehen Sie zur Qualitätskontrolle. Wenn die Ladung bereits in der App vorhanden ist, suchen Sie sie und tippen Sie auf „Jetzt analysieren", oder öffnen Sie die Ladung, um weitere Ladungsdetails zu sehen. Tippen Sie anschließend unten auf „Analysieren".

Sie können die Materialform auswählen, und wir empfehlen, den „Offline-Modus" zu aktivieren, wenn Ihr Standort eine schwache Daten- oder Signalverbindung hat. Im Offline-Modus werden die Fotos sicher im Browser Ihres Telefons gespeichert, sodass Sie sie später über WLAN hochladen können. Tippen Sie als Nächstes auf „Kamera öffnen", um mit dem Fotografieren des Materials zu beginnen.

Stellen Sie sich vor das Material und richten Sie die Kamera darauf. Safi führt Sie zum richtigen Abstand und Winkel, bevor das Foto automatisch aufgenommen wird.

Safi unterstützt sowohl die manuelle als auch die automatische Aufnahme, wir empfehlen jedoch die automatische Aufnahme für einen schnellen und nahtlosen Arbeitsablauf.

Sie können die Fotos jederzeit in der Fotobibliothek überprüfen. Wird ein Problem erkannt, erscheint neben der Bibliotheksschaltfläche und beim betroffenen Foto ein rotes oder gelbes Symbol.

Einstellungen wie der Offline-Modus oder Vibrationsalarme finden Sie oben rechts. Für schwaches Licht oder Nachtschichten steht ein Blitz zur Verfügung.

Für möglichst genaue Ergebnisse empfehlen wir, mindestens 10 Fotos pro Ladung aufzunehmen. Vermeiden Sie die stark verdichtete Seite des Ballens und konzentrieren Sie sich stattdessen auf die flacheren Ballenflächen.

Sobald Sie mit der Fotoabdeckung zufrieden sind, schließen Sie den Bericht ab, um Ihre KI-Analyse zu erstellen.

Im Offline-Modus aufgenommene Fotos können später über WLAN hochgeladen werden - entweder von der Berichtsseite oder von der Startseite der Qualitätskontrolle.

Nach der Analyse der Fotos sehen Sie die Zusammensetzungstabelle, in der die in den Einstellungen festgelegten Materialspezifikationen mit den tatsächlichen Ergebnissen der KI verglichen werden.

Um die von der KI analysierten Fotos durchzusehen, öffnen Sie den Bericht und gehen Sie zum Tab „Fotos". Wählen Sie „KI-Ballen", dann sehen Sie alle während der Sitzung aufgenommenen Fotos. Wir zeigen Ihnen den analysierten Bereich des Ballenumrisses und die von der KI erkannten Materialien. Sie können diese ein- und ausblenden.

Wenn Ihnen ein Problem mit der KI auffällt, etwa dass das falsche Objekt erkannt wurde, halten Sie das Foto gedrückt und hinterlassen Sie einen Kommentar. Dieser geht direkt an unser Machine-Learning-Team, damit wir die Daten Ihres Standorts weiter verbessern können.

Sie können auch Gerätefotos zur Analyse hochladen - in den Einrichtungsschritten oder über die Fotobibliothek des Berichts mit der Schaltfläche zum Hochladen.

Berichte lassen sich einfach mit Kolleginnen und Kollegen teilen, und Sie können ein PDF des Berichts mit allen Fotos und Daten herunterladen.

Wenn Ihr Standort Ladungen nicht im Voraus in Safi importiert, können Sie Ladungen anlegen, sobald sie auf dem Hof eintreffen. Wählen Sie unter „Qualität" die Option zum Anlegen einer Ladung. Achten Sie darauf, die richtige Materialspezifikation zu wählen, um Ihren Berichten einen sinnvollen Kontext zu geben - mehr dazu in einem separaten Video.`,
  sections: [
    {
      id: 'before-you-begin',
      heading: 'Bevor Sie beginnen',
      display: 'alert',
      blocks: [
        {
          type: 'paragraph',
          body: 'Laden Sie die [Safi AI App](https://apps.apple.com/gb/app/safi-ai/id6757709968) aus dem App Store herunter. Für die beste Leistung empfehlen wir ein **iPhone 14 Pro oder neuer**.',
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Eine Analyse starten',
      steps: [
        {
          title: 'App öffnen und zur Qualitätskontrolle gehen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Wenn die Ladung bereits vorhanden ist, suchen Sie sie und tippen Sie auf **Jetzt analysieren**, oder öffnen Sie die Ladung für die Details und tippen Sie unten auf **Analysieren**.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Ladungsliste der Qualitätskontrolle mit der Aktion „Jetzt analysieren" bei einer Ladung.',
                src: 'screenshots/collecting-quality-data/01-analyse.png',
              },
            },
          ],
        },
        {
          title: 'Einrichten & Kamera öffnen',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Wählen Sie die **Materialform**.',
                'Aktivieren Sie den **Offline-Modus** bei schwachem Signal.',
                '**Öffnen Sie die Kamera**, um mit dem Fotografieren des Materials zu beginnen.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Im Offline-Modus werden Fotos **sicher auf Ihrem Telefon gespeichert** und können **später über WLAN hochgeladen** werden, so müssen Sie sich keine Sorgen machen, Fotos zu verlieren.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Einrichtungsbildschirm der Kamera mit Materialform, Offline-Modus-Schalter und Schaltfläche „Kamera öffnen".',
                src: 'screenshots/collecting-quality-data/02-set-up.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'taking-photos',
      heading: 'Material fotografieren',
      steps: [
        {
          title: 'Material ins Bild rücken',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                '**Stellen Sie sich vor das Material** und richten Sie die Kamera darauf.',
                'Safi führt Sie zum **richtigen Abstand und Winkel** und ermöglicht Ihnen dann, das Foto aufzunehmen, sobald die Bildausrichtung stimmt.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Kamera, die den Bediener zum richtigen Abstand und Winkel führt, um den Ballen ins Bild zu rücken.',
                src: 'screenshots/collecting-quality-data/03-framing.png',
                caption:
                  'Der orangefarbene Rahmen und die Meldung fordern Sie auf, Abstand oder Winkel anzupassen; der grüne Rahmen bedeutet, dass ein Foto aufgenommen werden kann.',
              },
            },
          ],
        },
        {
          title: 'Automatische oder manuelle Aufnahme wählen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sobald Sie das Gerät im richtigen Abstand und Winkel halten, wird der Ballenrahmen grün.',
            },
            {
              type: 'list',
              items: [
                'Im **manuellen** Modus haben Sie die Kontrolle über die Fotoaufnahme.',
                'Im **automatischen** Modus wird das Foto für Sie aufgenommen (empfohlen für einen schnellen und nahtlosen Arbeitsablauf).',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Kamerabildschirm mit dem Umschalter zwischen automatischer und manueller Aufnahme.',
                src: 'screenshots/collecting-quality-data/04-auto-manual.png',
              },
            },
          ],
        },
        {
          title: 'Fotobibliothek',
          blocks: [
            {
              type: 'list',
              items: [
                'Sie können die **Fotos überprüfen**, indem Sie unten links im Kamerabildschirm auf die Schaltfläche der Fotobibliothek tippen.',
                'Wird **ein Problem erkannt**, erscheint neben der Bibliotheksschaltfläche und beim betroffenen Foto in der Bibliotheksansicht ein rotes oder gelbes Symbol.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Fotobibliothek mit den analysierten Fotos und KI-Statussymbolen.',
                src: 'screenshots/collecting-quality-data/05-library.png',
              },
            },
          ],
        },
        {
          title: 'Kameraeinstellungen & Werkzeuge',
          blocks: [
            {
              type: 'list',
              items: [
                '**Einstellungen** wie der Offline-Modus oder Vibrationsalarme sind oben rechts zugänglich.',
                'Ein **Blitz** ist für schwaches Licht oder Nachtschichten verfügbar.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Kamerabildschirm mit den Einstellungen und dem Blitz oben rechts.',
                src: 'screenshots/collecting-quality-data/06-settings.png',
              },
            },
          ],
        },
        {
          title: 'Analyse abschließen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sobald Sie mit der Fotoabdeckung zufrieden sind, **schließen Sie den Bericht ab**, um Ihre KI-Analyse zu erstellen.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Abschließen der Analyse zur Erstellung des KI-Berichts.',
                src: 'screenshots/collecting-quality-data/07-complete.png',
              },
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Wichtig für die beste Abdeckung',
              items: [
                '**Nehmen Sie mindestens 10 Fotos pro Ladung auf** - je mehr Fotos Sie machen, desto repräsentativer sind die KI-Ergebnisse für die Ladung.',
                '**Vermeiden Sie die stark verdichtete Seite des Ballens** und konzentrieren Sie sich auf die flacheren Ballenflächen.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Im Offline-Modus aufgenommene Fotos können später über WLAN hochgeladen werden - entweder von der Berichtsseite oder von der Startseite der Qualitätskontrolle.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-your-results',
      heading: 'Ergebnisse lesen',
      steps: [
        {
          title: 'Zusammensetzungstabelle prüfen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Nach der Analyse der Fotos sehen Sie die **Zusammensetzungstabelle**, in der die in den Einstellungen festgelegten **Materialspezifikationen** mit den tatsächlichen Ergebnissen der KI verglichen werden.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Zusammensetzungstabelle, die Ziel-Materialspezifikationen mit den KI-Ergebnissen vergleicht.',
                src: 'screenshots/collecting-quality-data/08-composition.png',
              },
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Um die während der Sitzung aufgenommenen Fotos zu überprüfen, gehen Sie zum **Tab „Fotos"** und wählen Sie das KI-Album.',
                'Der analysierte Bereich und die **von der KI erkannten Materialien** werden für jedes Foto angezeigt und können ein- und ausgeblendet werden.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: '**Verbessern Sie die KI-Genauigkeit für Ihr Material**, indem Sie Feedback direkt an unser Machine-Learning-Team senden. Halten Sie dazu auf dem Mobilgerät das Foto gedrückt oder klicken Sie am Desktop mit der rechten Maustaste, um einen Kommentar zu hinterlassen.',
            },
          ],
        },
        {
          title: 'Hochgeladene Fotos analysieren',
          blocks: [
            {
              type: 'paragraph',
              body: '**Laden Sie Fotos** von Ihrem Gerät zur Analyse in den **Einrichtungsschritten** oder über die **Fotobibliothek des Berichts** mit der Schaltfläche zum Hochladen hoch.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Hochladen von Gerätefotos zur Analyse vom Einrichtungsbildschirm aus.',
                src: 'screenshots/collecting-quality-data/09-upload.png',
              },
            },
          ],
        },
        {
          title: 'Berichte teilen und herunterladen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Berichte können einfach mit Kolleginnen und Kollegen **geteilt** werden, und Sie können ein **PDF herunterladen**, das die Fotos und Daten enthält.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Herunterladen des Berichts als PDF und Teilen, mit der Sprachauswahl.',
                src: 'screenshots/collecting-quality-data/10-share.png',
              },
            },
          ],
        },
        {
          title: 'Ladungen bei Ankunft anlegen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Wenn Ihr Standort Ladungen nicht im Voraus in Safi importiert, können Sie **Ladungen anlegen**, sobald sie auf dem Hof eintreffen.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Wählen Sie in der Qualitätskontrolle **Ladung anlegen** oder **Analyse starten**.',
                'Geben Sie die **Ladungsdetails** ein und wählen Sie die richtige **Materialspezifikation**, um Ihren Berichten einen sinnvollen Kontext zu geben - mehr dazu in einer separaten Anleitung.',
                'Speichern Sie dann die Ladung oder tippen Sie auf **Kamera öffnen**, um mit der Analyse des Materials zu beginnen.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Anlegen einer Ladung bei Ankunft und Auswahl ihrer Materialspezifikation.',
                src: 'screenshots/collecting-quality-data/11-create-load.png',
              },
            },
          ],
        },
      ],
    },
  ],
};
