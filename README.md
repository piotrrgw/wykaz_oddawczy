# 🚂 Generator Wykazu Oddawczego (v2.0)

Aplikacja webowa typu *Single-Page Application* (SPA) służąca do generowania i drukowania dokumentów "Wykaz Oddawczy" stosowanych w przewozach kolejowych. Narzędzie automatyzuje proces wypełniania formularza, wykonuje obliczenia i przygotowuje idealnie sformatowany wydruk A4 (Oryginał + Kopia).

## 📋 Główne Funkcjonalności

* **Formatowanie Druku (Pixel-Perfect):** Generuje dokumenty ściśle odwzorowujące układ tabelaryczny z Excela/PDF. Na jednej kartce A4 mieszczą się dwa formularze (Góra: Oryginał, Dół: Kopia).
* **Auto-Zapis (LocalStorage):** Wszystkie wprowadzone dane (nr pociągu, data, pozycje tabeli) są automatycznie zapisywane w przeglądarce. Po zamknięciu i ponownym otwarciu strony dane zostają przywrócone.
* **Obsługa wielu kopii:** Możliwość zdefiniowania liczby dodatkowych kopii. System automatycznie rozmieszcza je na kolejnych stronach (zachowując układ parzysty/nieparzysty).
* **Automatyczne sumowanie:** Aplikacja zlicza liczbę wypełnionych pozycji oraz sumę sztuk i wyświetla je w stopce tabeli.
* **Dostosowanie UI:**
    * **Tryb Ekranowy:** Nowoczesny, czytelny formularz z podziałem na sekcje, wyraźne krawędzie tabeli edycyjnej.
    * **Tryb Druku:** Ukrywa interfejs edycji, pozostawiając tylko czysty dokument zgodny ze standardami.
* **Optymalizacja WCAG/EAA:** Kontrastowy interfejs, czytelne czcionki, obsługa klawiaturą.

## 🛠️ Stack Technologiczny

Projekt został wykonany w technologii **Vanilla Web** (czysty kod bez frameworków), co zapewnia błyskawiczne działanie i łatwość przenoszenia (wystarczy jeden plik).

* **HTML5:** Semantyczna struktura dokumentu.
* **CSS3:** Zaawansowane stylowanie `@media print` do kontroli wydruku oraz `Flexbox/Grid` do układu formularza.
* **JavaScript (ES6+):** Logika dodawania wierszy, obliczeń, obsługi LocalStorage i generowania widoku wydruku.

## 🚀 Instrukcja Uruchomienia

Aplikacja nie wymaga instalacji ani serwera.

1.  Pobierz plik `index.html` (lub jakkolwiek nazwałeś plik z kodem).
2.  Otwórz plik w dowolnej nowoczesnej przeglądarce internetowej (Chrome, Edge, Firefox).
3.  Wypełnij formularz.
4.  Kliknij przycisk **DRUKUJ**, aby wygenerować dokument PDF lub wydrukować go na drukarce.

## 📝 Instrukcja Obsługi

1.  **Dane Nagłówkowe:** Wpisz numer pociągu "Do" oraz datę. Pola dotyczące konduktora oraz pociągu "Z" zostały celowo usunięte z formularza edycji (zgodnie z v1.9) i na wydruku pozostają puste do ręcznego uzupełnienia.
2.  **Lista Przesyłek:** Wypełnij tabelę.
    * Użyj przycisku `Wyczyść wiersze`, aby wyzerować tylko tabelę.
3.  **Wydruk:**
    * Wybierz liczbę dodatkowych kopii (domyślnie 1, co daje 1 stronę A4: Oryginał + Kopia).
    * Kliknij `DRUKUJ`.
4.  **Reset:** Przycisk `🗑️ Wyczyść wszystko` usuwa wszystkie dane z formularza oraz z pamięci przeglądarki.

## 📅 Changelog (Historia Zmian)

### [v2.0] - 2026-01-27
* **Nowość:** Dodano obsługę `LocalStorage` (automatyczny zapis danych).
* **Nowość:** Przebudowa interfejsu użytkownika (podział na karty sekcji, status zapisu).
* **Nowość:** Przycisk "Twardego Resetu" czyszczący pamięć.
* **Poprawka:** Ulepszona walidacja i renderowanie tabeli edycji.

### [v1.9] - 2026-01-25
* Usunięto pola "Nazwisko konduktora", "Stacja macierzysta", "Z pociągu", "Na stacji" z formularza edycji (pozostawiono puste miejsca na wydruku).
* Dodano pełne, czarne krawędzie wewnętrzne do tabeli w trybie edycji dla lepszej czytelności.

### [v1.8]
* Poprawa marginesów wydruku i centrowania na stronie A4.
* Usunięcie części pól nagłówkowych z formularza edycji.

### [v1.7]
* Usunięcie stopki z numerem wersji z widoku wydruku (pozostaje widoczna tylko na ekranie).

### [v1.6]
* Dodano wiersz sumujący (liczba pozycji, suma sztuk) na dole tabeli wydruku.

### [v1.0 - v1.5]
* Rozwój układu tabelarycznego, dopasowanie do wzorca PDF, implementacja logiki "Oryginał + Kopie".

---

**Autorzy:** Gemini & Piotr M 🚂
**Wersja:** 2.0