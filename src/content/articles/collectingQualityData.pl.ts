import type { ArticleContent } from '../types';

/**
 * Polish content for "Collecting quality data" / „Zbieranie danych o jakości".
 * Mirrors the English structure (same section ids, same step order, same screenshots).
 */
export const collectingQualityDataPl: ArticleContent = {
  title: 'Zbieranie danych o jakości',
  summary:
    'Użyj Safi AI, aby przeanalizować jakość materiału, wygenerować raport jakości AI i porównać wyniki z Twoimi specyfikacjami materiałowymi.',
  transcript: `Witamy w Kontroli jakości Safi AI. W tym filmie pokażemy, jak analizować jakość materiału i generować raporty AI za pomocą Safi AI.

Najpierw pobierz aplikację Safi AI ze sklepu App Store. Dla najlepszej wydajności zalecamy iPhone 14 Pro lub nowszy.

Następnie otwórz aplikację i przejdź do Kontroli jakości. Jeśli ładunek już istnieje w aplikacji, znajdź go i dotknij „Analizuj teraz" lub kliknij ładunek, aby zobaczyć więcej szczegółów. Następnie dotknij „Analizuj" na dole.

Możesz wybrać formę materiału i zalecamy włączenie „trybu offline", jeśli Twój zakład ma słabe dane lub sygnał. W trybie offline zdjęcia są bezpiecznie przechowywane w przeglądarce telefonu, dzięki czemu możesz przesłać je później przez Wi-Fi. Następnie dotknij „Otwórz aparat", aby rozpocząć fotografowanie materiału.

Stań przed materiałem i skieruj na niego aparat. Safi naprowadzi Cię na właściwą odległość i kąt, zanim automatycznie zrobi zdjęcie.

Safi obsługuje zarówno ręczne, jak i automatyczne robienie zdjęć, ale zalecamy tryb automatyczny dla szybkiego i płynnego przepływu pracy.

Zdjęcia możesz przeglądać w dowolnym momencie w bibliotece zdjęć. Jeśli wykryto problem, obok przycisku biblioteki i przy danym zdjęciu w widoku biblioteki pojawi się czerwony lub żółty wskaźnik.

Ustawienia, takie jak tryb offline czy wibracje alertów, są dostępne w prawym górnym rogu. Lampa błyskowa jest dostępna do pracy przy słabym świetle lub na nocnej zmianie.

Aby uzyskać najdokładniejsze wyniki, zalecamy zrobienie co najmniej 10 zdjęć na ładunek. Unikaj fotografowania mocno sprasowanej strony beli i skup się na płaskich powierzchniach beli.

Gdy jesteś zadowolony z pokrycia zdjęciami, zakończ raport, aby wygenerować analizę AI.

Zdjęcia zrobione w trybie offline można przesłać później przez Wi-Fi - albo ze strony raportu, albo ze strony głównej Kontroli jakości.

Po przeanalizowaniu zdjęć zobaczysz tabelę składu porównującą specyfikacje materiałowe ustawione w ustawieniach z rzeczywistymi wynikami AI.

Aby przejrzeć zdjęcia przeanalizowane przez AI, kliknij raport i przejdź do karty „Zdjęcia". Wybierz album AI, a zobaczysz wszystkie zdjęcia zrobione podczas sesji. Pokażemy Ci przeanalizowany obszar obrysu beli i materiały wykryte przez AI. Możesz je włączać i wyłączać.

Jeśli zauważysz problem z AI, na przykład wykrycie niewłaściwego obiektu, przytrzymaj zdjęcie i zostaw komentarz. Trafi on bezpośrednio do naszego zespołu Machine Learning, abyśmy mogli stale ulepszać dane Twojego zakładu.

Możesz też przesłać zdjęcia z urządzenia do analizy w krokach konfiguracji lub przez bibliotekę zdjęć raportu, klikając przycisk przesyłania.

Raporty można łatwo udostępniać współpracownikom, a Ty możesz pobrać plik PDF raportu zawierający wszystkie zdjęcia i dane.

Jeśli Twój zakład nie importuje ładunków do Safi z wyprzedzeniem, możesz tworzyć ładunki, gdy przybywają na plac. W Kontroli jakości wybierz opcję utworzenia ładunku. Upewnij się, że wybierasz właściwą specyfikację materiału, aby nadać raportom sensowny kontekst - więcej o tym w osobnym filmie.`,
  sections: [
    {
      id: 'before-you-begin',
      heading: 'Zanim zaczniesz',
      display: 'alert',
      blocks: [
        {
          type: 'paragraph',
          body: 'Pobierz [aplikację Safi AI](https://apps.apple.com/gb/app/safi-ai/id6757709968) ze sklepu App Store. Dla najlepszej wydajności zalecamy **iPhone 14 Pro lub nowszy**.',
        },
      ],
    },
    {
      id: 'start-an-analysis',
      heading: 'Rozpocznij analizę',
      steps: [
        {
          title: 'Otwórz aplikację i przejdź do Kontroli jakości',
          blocks: [
            {
              type: 'paragraph',
              body: 'Jeśli ładunek już istnieje, znajdź go i dotknij **Analizuj teraz**, albo otwórz ładunek, aby zobaczyć szczegóły, i dotknij **Analizuj** na dole.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Lista ładunków Kontroli jakości z akcją „Analizuj teraz" przy ładunku.',
                src: 'screenshots/collecting-quality-data/01-analyse.png',
              },
            },
          ],
        },
        {
          title: 'Konfiguracja i otwarcie aparatu',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Wybierz **formę materiału**.',
                'Włącz **tryb offline**, jeśli sygnał jest słaby.',
                '**Otwórz aparat**, aby rozpocząć fotografowanie materiału.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'W trybie offline zdjęcia są **bezpiecznie przechowywane** w telefonie i mogą zostać **przesłane później przez Wi-Fi**, więc nie musisz martwić się o utratę zdjęć.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Ekran konfiguracji aparatu z formą materiału, przełącznikiem trybu offline i przyciskiem „Otwórz aparat".',
                src: 'screenshots/collecting-quality-data/02-set-up.png',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'taking-photos',
      heading: 'Fotografowanie materiału',
      steps: [
        {
          title: 'Wykadruj materiał',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                '**Stań przed materiałem** i skieruj na niego aparat.',
                'Safi naprowadza Cię na **właściwą odległość i kąt**, a następnie umożliwia zrobienie zdjęcia, gdy kadr jest prawidłowy.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Aparat naprowadzający operatora na właściwą odległość i kąt, aby wykadrować belę.',
                src: 'screenshots/collecting-quality-data/03-framing.png',
                caption:
                  'Pomarańczowa ramka i komunikat poproszą Cię o dostosowanie odległości lub kąta; zielona ramka oznacza, że można zrobić zdjęcie.',
              },
            },
          ],
        },
        {
          title: 'Wybierz tryb automatyczny lub ręczny',
          blocks: [
            {
              type: 'paragraph',
              body: 'Gdy trzymasz urządzenie we właściwej odległości i pod właściwym kątem, ramka beli zmieni kolor na zielony.',
            },
            {
              type: 'list',
              items: [
                'W trybie **ręcznym** masz kontrolę nad robieniem zdjęć.',
                'W trybie **automatycznym** zdjęcie jest robione za Ciebie (zalecane dla szybkiego i płynnego przepływu pracy).',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Ekran aparatu z przełącznikiem między trybem automatycznym a ręcznym.',
                src: 'screenshots/collecting-quality-data/04-auto-manual.png',
              },
            },
          ],
        },
        {
          title: 'Biblioteka zdjęć',
          blocks: [
            {
              type: 'list',
              items: [
                'Zdjęcia możesz **przeglądać** w dowolnym momencie, klikając przycisk biblioteki zdjęć (w lewym dolnym rogu ekranu aparatu).',
                'Jeśli **wykryto problem**, obok przycisku biblioteki i przy danym zdjęciu w widoku biblioteki pojawi się czerwony lub żółty wskaźnik.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Biblioteka zdjęć z przeanalizowanymi zdjęciami i wskaźnikami statusu AI.',
                src: 'screenshots/collecting-quality-data/05-library.png',
              },
            },
          ],
        },
        {
          title: 'Ustawienia i narzędzia aparatu',
          blocks: [
            {
              type: 'list',
              items: [
                '**Ustawienia**, takie jak tryb offline lub wibracje alertów, są dostępne w prawym górnym rogu.',
                '**Lampa błyskowa** jest dostępna do pracy przy słabym świetle lub na nocnej zmianie.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Ekran aparatu z ustawieniami i lampą błyskową w prawym górnym rogu.',
                src: 'screenshots/collecting-quality-data/06-settings.png',
              },
            },
          ],
        },
        {
          title: 'Zakończ analizę',
          blocks: [
            {
              type: 'paragraph',
              body: 'Gdy jesteś zadowolony z pokrycia zdjęciami, **zakończ raport**, aby wygenerować analizę AI.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Zakończenie analizy w celu wygenerowania raportu AI.',
                src: 'screenshots/collecting-quality-data/07-complete.png',
              },
            },
            {
              type: 'callout',
              variant: 'info',
              title: 'Ważne dla najlepszego pokrycia',
              items: [
                '**Zrób co najmniej 10 zdjęć na ładunek** - im więcej zdjęć zrobisz, tym bardziej reprezentatywne dla ładunku będą wyniki AI.',
                '**Unikaj fotografowania mocno sprasowanej strony beli** i skup się na płaskich powierzchniach beli.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: 'Zdjęcia zrobione w trybie offline można przesłać później przez Wi-Fi - albo ze strony raportu, albo ze strony głównej Kontroli jakości.',
            },
          ],
        },
      ],
    },
    {
      id: 'read-your-results',
      heading: 'Odczytaj wyniki',
      steps: [
        {
          title: 'Przejrzyj tabelę składu',
          blocks: [
            {
              type: 'paragraph',
              body: 'Po przeanalizowaniu zdjęć zobaczysz **tabelę składu** porównującą **specyfikacje materiałowe** ustawione w Ustawieniach z rzeczywistymi wynikami AI.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Tabela składu porównująca docelowe specyfikacje materiałowe z wynikami AI.',
                src: 'screenshots/collecting-quality-data/08-composition.png',
              },
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Aby przejrzeć zdjęcia zrobione podczas sesji, przejdź do **karty Zdjęcia** i wybierz album AI.',
                'Przeanalizowany obszar i **materiały wykryte przez AI** są pokazane dla każdego zdjęcia; możesz je włączać i wyłączać.',
              ],
            },
            {
              type: 'callout',
              variant: 'tip',
              body: '**Popraw dokładność AI dla swojego materiału**, wysyłając opinię bezpośrednio do naszego zespołu Machine Learning. Po prostu przytrzymaj zdjęcie na telefonie lub kliknij prawym przyciskiem na komputerze, aby zostawić komentarz.',
            },
          ],
        },
        {
          title: 'Analizuj przesłane zdjęcia',
          blocks: [
            {
              type: 'paragraph',
              body: '**Prześlij zdjęcia** do analizy ze swojego urządzenia w **krokach konfiguracji** lub przez **bibliotekę zdjęć raportu** za pomocą przycisku przesyłania.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Przesyłanie zdjęć z urządzenia do analizy z ekranu konfiguracji.',
                src: 'screenshots/collecting-quality-data/09-upload.png',
              },
            },
          ],
        },
        {
          title: 'Udostępnianie i pobieranie raportów',
          blocks: [
            {
              type: 'paragraph',
              body: 'Raporty można łatwo **udostępniać** współpracownikom, a Ty możesz **pobrać plik PDF** raportu zawierający zdjęcia i dane.',
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Pobieranie raportu jako PDF i udostępnianie go, z selektorem języka.',
                src: 'screenshots/collecting-quality-data/10-share.png',
              },
            },
          ],
        },
        {
          title: 'Tworzenie ładunków w miarę ich przybywania',
          blocks: [
            {
              type: 'paragraph',
              body: 'Jeśli Twój zakład nie importuje ładunków do Safi z wyprzedzeniem, możesz **tworzyć ładunki**, gdy przybywają na plac.',
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'W Kontroli jakości wybierz **Utwórz ładunek** lub **Rozpocznij analizę**.',
                'Wprowadź **szczegóły ładunku** i wybierz właściwą **specyfikację materiału**, aby nadać raportom sensowny kontekst - więcej o tym w osobnym przewodniku.',
                'Następnie zapisz ładunek lub dotknij **Otwórz aparat**, aby rozpocząć analizę materiału.',
              ],
            },
            {
              type: 'media',
              media: {
                kind: 'screenshot',
                alt: 'Tworzenie ładunku po przybyciu i wybór jego specyfikacji materiału.',
                src: 'screenshots/collecting-quality-data/11-create-load.png',
              },
            },
          ],
        },
      ],
    },
  ],
};
