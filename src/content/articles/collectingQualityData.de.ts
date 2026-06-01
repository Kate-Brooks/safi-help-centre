import type { ArticleContent } from '../types';

/**
 * German content for "Collecting quality data" / „Qualitätsdaten erfassen".
 * Section ids match the English version so anchors and prev/next stay aligned.
 */
export const collectingQualityDataDe: ArticleContent = {
  title: 'Qualitätsdaten erfassen',
  summary:
    'Mit der Safi AI App fotografieren Sie Material, erstellen einen KI-Qualitätsbericht und prüfen die Ergebnisse anhand Ihrer Materialspezifikationen.',
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
      intro:
        'Qualitätsdaten werden in der Safi AI iOS-App vom Bediener auf dem Hof erfasst. Richten Sie dies einmalig vor Ihrer ersten Analyse ein.',
      steps: [
        {
          title: 'Safi AI App herunterladen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Laden Sie die Safi AI App aus dem App Store herunter und melden Sie sich mit Ihrem Safi-Konto an.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Der Safi AI App-Eintrag im iOS App Store.',
                caption: 'Safi AI im App Store.',
              },
            },
          ],
        },
        {
          title: 'Empfohlenes Gerät verwenden',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'Für die beste Kamera- und KI-Leistung empfehlen wir ein **iPhone 14 Pro oder neuer**. Ältere Geräte funktionieren, nehmen aber möglicherweise langsamer auf.',
            },
          ],
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Eine Analyse starten',
      steps: [
        {
          title: 'Ladung in der Qualitätskontrolle öffnen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Öffnen Sie die App und gehen Sie zur **Qualitätskontrolle**. Wenn die Ladung bereits vorhanden ist, suchen Sie sie und tippen Sie auf **Jetzt analysieren**, oder öffnen Sie die Ladung für die Details und tippen Sie unten auf **Analysieren**.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Ladungsliste der Qualitätskontrolle in der App mit der Schaltfläche „Jetzt analysieren".',
                caption: 'Ladung suchen und auf „Jetzt analysieren" tippen.',
              },
            },
          ],
        },
        {
          title: 'Materialform auswählen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Wählen Sie die Materialform für diese Ladung, damit Safi weiß, was analysiert wird.',
            },
          ],
        },
        {
          title: 'Offline-Modus bei schwachem Signal aktivieren',
          blocks: [
            {
              type: 'callout',
              variant: 'tip',
              body: 'Bei schwacher Daten- oder Signalverbindung aktivieren Sie den **Offline-Modus**. Fotos werden sicher auf Ihrem Telefon gespeichert und können später über WLAN hochgeladen werden – so blockiert die Verbindung Sie nie auf dem Hof.',
            },
          ],
        },
        {
          title: 'Kamera öffnen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Tippen Sie auf **Kamera öffnen**, um mit dem Fotografieren des Materials zu beginnen.',
            },
          ],
        },
      ],
    },
    {
      id: 'capture-photos',
      heading: 'Material fotografieren',
      steps: [
        {
          title: 'Material ins Bild rücken',
          blocks: [
            {
              type: 'paragraph',
              body: 'Stellen Sie sich vor das Material und richten Sie die Kamera darauf. Safi führt Sie zum richtigen Abstand und Winkel und nimmt das Foto automatisch auf, sobald die Bildausrichtung stimmt.',
            },
            {
              type: 'media',
              media: {
                kind: 'gif',
                alt: 'Kameraansicht mit dem Bildschirmrahmen, der den Bediener zum richtigen Abstand und Winkel führt.',
                caption: 'Safi führt Sie vor der Aufnahme zum richtigen Abstand und Winkel.',
              },
            },
          ],
        },
        {
          title: 'Automatische oder manuelle Aufnahme wählen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Safi unterstützt sowohl die automatische als auch die manuelle Aufnahme.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'Wir empfehlen die **automatische Aufnahme** für einen schnellen, nahtlosen Arbeitsablauf. **Einstellungen** (z. B. Offline-Modus und Vibrationsalarme) und der **Blitz** für schwaches Licht oder Nachtschichten befinden sich oben rechts in der Kamera.',
            },
          ],
        },
      ],
    },
    {
      id: 'best-coverage',
      heading: 'Beste Abdeckung erzielen',
      blocks: [
        {
          type: 'callout',
          variant: 'important',
          body: 'Für möglichst genaue Ergebnisse nehmen Sie **mindestens 10 Fotos pro Ladung** auf. Vermeiden Sie die stark verdichtete Seite des Ballens und konzentrieren Sie sich auf die flacheren Ballenflächen.',
        },
        {
          type: 'media',
          media: {
            kind: 'screenshot',
            alt: 'Diagramm, das die zu fotografierenden flachen Ballenflächen und die zu vermeidende verdichtete Seite zeigt.',
            caption: 'Fotografieren Sie die flacheren Flächen; vermeiden Sie die verdichtete Seite.',
          },
        },
      ],
    },
    {
      id: 'review-library',
      heading: 'Fotos in der Bibliothek überprüfen',
      steps: [
        {
          title: 'Fotobibliothek öffnen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sie können Ihre Fotos jederzeit in der Fotobibliothek überprüfen.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'Wird ein Problem erkannt, erscheint neben der Bibliotheksschaltfläche und beim betroffenen Foto ein **rotes oder gelbes Symbol**. Rot kennzeichnet einen Fehler, Gelb eine Warnung.',
            },
          ],
        },
      ],
    },
    {
      id: 'complete-report',
      heading: 'Bericht abschließen',
      steps: [
        {
          title: 'KI-Analyse erstellen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sobald Sie mit der Fotoabdeckung zufrieden sind, schließen Sie den Bericht ab, um Ihre KI-Analyse zu erstellen.',
            },
            {
              type: 'callout',
              variant: 'note',
              body: 'Im Offline-Modus aufgenommene Fotos können später über WLAN hochgeladen werden – entweder von der Berichtsseite oder von der Startseite der Qualitätskontrolle.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-results',
      heading: 'KI-Ergebnisse lesen',
      steps: [
        {
          title: 'Zusammensetzungstabelle prüfen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Nach der Analyse vergleicht die Zusammensetzungstabelle die in den Einstellungen festgelegten Materialspezifikationen mit den tatsächlichen Ergebnissen der KI.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Zusammensetzungstabelle, die Ziel-Materialspezifikationen mit KI-Ergebnissen vergleicht, mit Zeilen innerhalb und außerhalb der Spezifikation.',
                caption: 'Die Zusammensetzungstabelle: Zielspezifikation vs. KI-Ergebnis.',
              },
            },
          ],
        },
        {
          title: 'Analysierte Fotos erkunden',
          blocks: [
            {
              type: 'paragraph',
              body: 'Öffnen Sie den Bericht und gehen Sie zum Tab **Fotos**, dann wählen Sie **KI-Ballen**, um jedes Foto der Sitzung zu sehen. Safi zeigt den analysierten Ballenumriss und die erkannten Materialien – blenden Sie jedes Material zum Prüfen ein und aus.',
            },
          ],
        },
        {
          title: 'KI-Erkennungsproblem melden',
          blocks: [
            {
              type: 'paragraph',
              body: 'Wenn Ihnen ein Problem auffällt – etwa dass das falsche Objekt erkannt wurde – halten Sie das Foto gedrückt und hinterlassen Sie einen Kommentar. Er geht direkt an unser Machine-Learning-Team, um die Daten Ihres Standorts weiter zu verbessern.',
            },
          ],
        },
        {
          title: 'Gerätefotos hochladen (optional)',
          blocks: [
            {
              type: 'paragraph',
              body: 'Sie können auch Fotos von Ihrem Gerät zur Analyse hochladen – in den Einrichtungsschritten oder über die Fotobibliothek des Berichts mit der Schaltfläche zum Hochladen.',
            },
          ],
        },
      ],
    },
    {
      id: 'share-and-export',
      heading: 'Teilen und exportieren',
      steps: [
        {
          title: 'Bericht teilen oder herunterladen',
          blocks: [
            {
              type: 'paragraph',
              body: 'Berichte können mit Kolleginnen und Kollegen geteilt werden, und Sie können ein PDF mit allen Fotos und Daten herunterladen.',
            },
          ],
        },
      ],
    },
    {
      id: 'create-loads-on-arrival',
      heading: 'Ladungen bei Ankunft anlegen',
      blocks: [
        {
          type: 'paragraph',
          body: 'Wenn Ihr Standort Ladungen nicht im Voraus in Safi importiert, können Sie Ladungen anlegen, sobald sie auf dem Hof eintreffen. Wählen Sie unter **Qualität** die Option **Ladung anlegen**.',
        },
        {
          type: 'callout',
          variant: 'important',
          body: 'Wählen Sie immer die richtige **Materialspezifikation**, damit Ihre Berichte einen sinnvollen Kontext haben – das behandeln wir in einer separaten Anleitung.',
        },
      ],
    },
  ],
};
