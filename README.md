# 🚂 Generator Wykazu Oddawczego (v4.2)

Profesjonalna aplikacja webowa typu *Single-Page Application* (SPA) / PWA służąca do szybkiego generowania, edycji i drukowania dokumentów "Wykaz Oddawczy" stosowanych w przewozach kolejowych.

Narzędzie automatyzuje proces wypełniania formularza, zapamiętuje dane i przygotowuje idealnie sformatowany wydruk A4 (Oryginał + Kopia na jednej stronie lub pełna strona dla 25 rubryk).

## 👥 Współautorzy
* **Piotr M 🚂** – Koncepcja, testy, wdrożenie
* **Gemini** – Kod, architektura, style CSS
* **Thundo** – Współpraca i rozwój

## 📋 Główne Funkcjonalności

* **Wydruk A4 (Pixel-Perfect):** Automatyczne generowanie arkusza zawierającego "ORYGINAŁ" i "KOPIĘ" na jednej kartce A4 (lub 1 pełna strona przy 25 wierszach), z zachowaniem wymogów formalnych.
* **Bezpośrednia Integracja z API AKB-DATA (Kurs90 / EPA):**
    * Aplikacja łączy się bezpośrednio z publicznym API bazy **AKB-DATA** (`public_data/stations_dict`), pobierając 510 aktualnych stacji krajowych z kodami EPA i zapisując je w pamięci podręcznej przeglądarki (`localStorage` + Service Worker).
    * **Automatyczna synchronizacja w tle:** Przy obecności połączenia internetowego aplikacja sama odświeża bazę z API, a w razie braku sieci natychmiast korzysta z pamięci podręcznej (tryb offline-first).
    * **Inteligentna podmiana kodu EPA:** Pracownik wpisuje w polu stacji jedynie numer EPA (np. `242` dla Warszawy Centralnej, `71` dla Katowic, `4400` dla Żywca), a skrypt automatycznie podmienia numer na oficjalną nazwę stacji po naciśnięciu Tab, Enter lub zmianie pola.
    * **Wyszukiwarka i podpowiedzi (Datalist):** Podpowiedzi stacji wraz z kodami EPA podczas pisania.
    * **Panel bazy stacji (`🚉 Baza stacji`):** Przeglądanie bazy i kodów EPA, przycisk natychmiastowego pobrania prosto z API AKB-DATA (`⚡ Pobierz z API AKB-DATA`), import własnych plików JSON oraz przywracanie domyślnego słownika.
* **Pełna Samodzielność i Praca Offline (PWA):** Wykaz oddawczy działa w 100% offline na dowolnym urządzeniu bez konieczności stałego połączenia z siecią.
* **Opcja Przekreślania Pustych Rubryk:** Wygodny przycisk w dolnej belce pozwalający włączyć lub wyłączyć automatyczne poziome przekreślanie pustych wierszy na wydruku.
* **Inteligentne Zarządzanie Wierszami:**
    * Czerwony przycisk **✕** w nagłówku tabeli (obok "Stacja Nadania"): Szybkie wyczyszczenie całej tabeli (wszystkich pozycji wierszy) za jednym kliknięciem, z zachowaniem danych nagłówka i kasjera.
    * Czerwony przycisk **✕** po lewej stronie każdego wiersza: Wyszyszczenie pojedynczego wiersza i automatyczne przesunięcie pozycji poniżej w górę.
    * Płynny suwak formatu **A5 / A4**: Szybki wybór pomiędzy formatem A5 (10 pozycji, 2 formularze na stronę A4) a A4 (25 pozycji, pełna strona A4).
* **Inteligentne Autouzupełnianie:**
    * Automatyczne kopiowanie stacji nadania/przeznaczenia do kolejnych wierszy.
    * Przycisk "DZISIAJ" do szybkiego wstawiania daty.
* **Auto-Zapis (Local Storage):** Zoptymalizowany zapis w czasie rzeczywistym z mechanizmem debounce. Po odświeżeniu strony nic nie ginie.
* **Twardy Reset (Cache):** Dedykowany przycisk czyszczący pamięć podręczną (CacheStorage), Service Workera i dane formularza.
* **Wsparcie Dupleksu:** Automatyczne wstawianie pustych stron zapobiegające zadrukowaniu rewersu przy druku dwustronnym.

## 🚀 Jak używać?

1. Pobierz pliki z tego repozytorium lub otwórz stronę aplikacji.
2. Otwórz plik `index.html` w dowolnej nowoczesnej przeglądarce (Chrome, Edge, Firefox, Safari).
3. Wypełnij formularz na ekranie (dane nagłówkowe, lista przesyłek). W polach stacji możesz wpisać nazwę lub kod EPA (np. `242`).
4. Kliknij przycisk **DRUKUJ DOKUMENTY**.
5. W oknie drukowania upewnij się, że:
    * Format papieru to **A4**.
    * Marginesy są ustawione na **Domyślne** lub **Minimalne**.
    * Opcja "Grafika w tle" (Background graphics) jest zaznaczona (dla lepszego kontrastu nagłówków).

## 🛠️ Technologie

* **HTML5 / CSS3:** Struktura i style (sztywny układ tabelaryczny dla wydruku).
* **JavaScript (Vanilla JS):** Wydajna logika aplikacji, brak zewnętrznych frameworków.
* **PWA & Service Worker:** Szybkie ładowanie i pełna obsługa pracy offline.