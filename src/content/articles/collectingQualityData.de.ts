import type { ArticleContent } from '../types';

/**
 * German content for "Collecting quality data" / „Qualitätsdaten erfassen".
 * Mirrors the English structure (same section ids, same screenshot slots).
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

Im Offline-Modus aufgenommene Fotos können später über WLAN hochgeladen werden – entweder von der Berichtsseite oder von der Startseite der Qualitätskontrolle.

Nach der Analyse der Fotos sehen Sie die Zusammensetzungstabelle, in der die in den Einstellungen festgelegten Materialspezifikationen mit den tatsächlichen Ergebnissen der KI verglichen werden.

Um die von der KI analysierten Fotos durchzusehen, öffnen Sie den Bericht und gehen Sie zum Tab „Fotos". Wählen Sie „KI-Ballen", dann sehen Sie alle während der Sitzung aufgenommenen Fotos. Wir zeigen Ihnen den analysierten Bereich des Ballenumrisses und die von der KI erkannten Materialien. Sie können diese ein- und ausblenden.

Wenn Ihnen ein Problem mit der KI auffällt, etwa dass das falsche Objekt erkannt wurde, halten Sie das Foto gedrückt und hinterlassen Sie einen Kommentar. Dieser geht direkt an unser Machine-Learning-Team, damit wir die Daten Ihres Standorts weiter verbessern können.

Sie können auch Gerätefotos zur Analyse hochladen – in den Einrichtungsschritten oder über die Fotobibliothek des Berichts mit der Schaltfläche zum Hochladen.

Berichte lassen sich einfach mit Kolleginnen und Kollegen teilen, und Sie können ein PDF des Berichts mit allen Fotos und Daten herunterladen.

Wenn Ihr Standort Ladungen nicht im Voraus in Safi importiert, können Sie Ladungen anlegen, sobald sie auf dem Hof eintreffen. Wählen Sie unter „Qualität" die Option zum Anlegen einer Ladung. Achten Sie darauf, die richtige Materialspezifikation zu wählen, um Ihren Berichten einen sinnvollen Kontext zu geben – mehr dazu in einem separaten Video.`,
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
              },
            },
          ],
        },
        {
          title: 'Kamera einrichten',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: ['Wählen Sie die Materialform.', 'Aktivieren Sie den Offline-Modus bei schwachem Signal.'],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Im Offline-Modus werden Fotos sicher auf Ihrem Telefon gespeichert und können später über WLAN hochgeladen werden – so müssen Sie sich keine Sorgen machen, Fotos zu verlieren.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Einrichtungsbildschirm der Kamera mit den Materialform-Optionen und dem Offline-Modus-Schalter.',
              },
            },
          ],
        },
        {
          title: 'Kamera öffnen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Öffnen Sie die Kamera, um mit dem Fotografieren des Materials zu beginnen.',
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
                'Stellen Sie sich vor das Material und richten Sie die Kamera darauf.',
                'Safi führt Sie zum richtigen Abstand und Winkel und nimmt das Foto automatisch auf, sobald die Bildausrichtung stimmt.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'gif',
                alt: 'Kameraansicht, die den Bediener vor der automatischen Aufnahme zum richtigen Abstand und Winkel führt.',
              },
            },
          ],
        },
        {
          title: 'Automatische oder manuelle Aufnahme wählen',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'Wir empfehlen die **automatische Aufnahme** für einen schnellen, nahtlosen Arbeitsablauf.',
            },
          ],
        },
        {
          title: 'Fotobibliothek',
          blocks: [
            {
              type: 'list',
              items: [
                'Sie können die Fotos hier jederzeit überprüfen.',
                'Wird ein Problem erkannt, erscheint neben der Bibliotheksschaltfläche und beim betroffenen Foto in der Bibliotheksansicht ein rotes oder gelbes Symbol.',
              ],
            },
          ],
        },
        {
          title: 'Kameraeinstellungen & Werkzeuge',
          blocks: [
            {
              type: 'list',
              items: [
                'Einstellungen wie der Offline-Modus oder Vibrationsalarme sind oben rechts zugänglich.',
                'Für schwaches Licht oder Nachtschichten steht ein Blitz zur Verfügung.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Kamerabildschirm mit den Einstellungen und dem Blitz oben rechts.',
              },
            },
          ],
        },
        {
          title: 'Für die beste Abdeckung',
          blocks: [
            {
              type: 'list',
              items: [
                'Nehmen Sie mindestens 10 Fotos pro Ladung auf – je mehr Fotos Sie machen, desto repräsentativer sind die KI-Ergebnisse für die Ladung.',
                'Vermeiden Sie die stark verdichtete Seite des Ballens und konzentrieren Sie sich auf die flacheren Ballenflächen.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Diagramm eines Ballens, das die zu fotografierenden flachen Flächen und die zu vermeidende verdichtete Seite zeigt.',
              },
            },
          ],
        },
        {
          title: 'Analyse abschließen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sobald Sie mit der Fotoabdeckung zufrieden sind, schließen Sie den Bericht ab, um Ihre KI-Analyse zu erstellen.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Abschließen des Berichts zur Erstellung der KI-Analyse.',
              },
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
              body: 'Nach der Analyse der Fotos sehen Sie die Zusammensetzungstabelle, in der die in den Einstellungen festgelegten Materialspezifikationen mit den tatsächlichen Ergebnissen der KI verglichen werden.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Zusammensetzungstabelle, die Ziel-Materialspezifikationen mit den KI-Ergebnissen vergleicht.',
              },
            },
            {
              type: 'callout',
              variant: 'important',
              body: 'Im Offline-Modus aufgenommene Fotos können später über WLAN hochgeladen werden – entweder von der Berichtsseite oder von der Startseite der Qualitätskontrolle.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Hochladen von Offline-Fotos von der Berichtsseite über WLAN.',
              },
            },
          ],
        },
        {
          title: 'Analysierte Fotos erkunden',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Suchen Sie die Ladung und wählen Sie den Bericht aus.',
                'Gehen Sie zum Tab **Fotos**.',
                'Wählen Sie das Album **KI-Ballen**, um die während der Sitzung aufgenommenen Fotos zu sehen.',
                'Für jedes Foto wird der analysierte Bereich des Ballenumrisses zusammen mit den von der KI erkannten Materialien angezeigt, die Sie ein- und ausblenden können.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'gif',
                alt: 'Album „KI-Ballen", das die erkannten Materialumrisse beim Ein- und Ausblenden zeigt.',
              },
            },
          ],
        },
        {
          title: 'Die KI auf Ihr Material trainieren',
          blocks: [
            {
              type: 'list',
              items: [
                'Wenn Ihnen ein Problem mit der KI auffällt, etwa dass das falsche Objekt erkannt wurde, halten Sie das Foto gedrückt (auf dem Mobilgerät) oder klicken Sie mit der rechten Maustaste darauf (am Desktop), um einen Kommentar zu hinterlassen.',
                'Ihr Kommentar geht direkt an unser Machine-Learning-Team, damit wir die Daten Ihres Standorts weiter verbessern können.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Hinterlassen eines Kommentars zu einem Foto, um ein KI-Erkennungsproblem zu melden.',
              },
            },
          ],
        },
        {
          title: 'Hochgeladene Fotos analysieren',
          blocks: [
            {
              type: 'list',
              items: [
                'Laden Sie Fotos von Ihrem Gerät zur Analyse während der Einrichtungsschritte hoch,',
                'oder über die Fotobibliothek des Berichts mit der Schaltfläche zum Hochladen.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Hochladen von Gerätefotos zur Analyse über die Fotobibliothek des Berichts.',
              },
            },
          ],
        },
        {
          title: 'Berichte teilen und herunterladen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Berichte können einfach mit Kolleginnen und Kollegen geteilt werden, und Sie können ein PDF des Berichts mit allen Fotos und Daten herunterladen.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Teilen eines Berichts mit Kolleginnen und Kollegen und Herunterladen als PDF.',
              },
            },
          ],
        },
        {
          title: 'Ladungen bei Ankunft anlegen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Wenn Ihr Standort Ladungen nicht im Voraus in Safi importiert, können Sie Ladungen anlegen, sobald sie auf dem Hof eintreffen. Wählen Sie unter **Qualität** die Option **Ladung anlegen**. Achten Sie darauf, die richtige Materialspezifikation zu wählen, um Ihren Berichten einen sinnvollen Kontext zu geben – mehr dazu in einer separaten Anleitung.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Anlegen einer Ladung bei Ankunft und Auswahl ihrer Materialspezifikation.',
              },
            },
          ],
        },
      ],
    },
  ],
};
