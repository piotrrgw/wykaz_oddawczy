# 🚂 Generator Wykazu Oddawczego (v3.0)

Profesjonalna aplikacja webowa typu *Single-Page Application* (SPA) służąca do szybkiego generowania, edycji i drukowania dokumentów "Wykaz Oddawczy" stosowanych w przewozach kolejowych.

Narzędzie automatyzuje proces wypełniania formularza, zapamiętuje dane i przygotowuje idealnie sformatowany wydruk A4 (Oryginał + Kopia na jednej stronie).

## 👥 Autorzy
* **Piotr M 🚂** – Koncepcja, testy, wdrożenie
* **Gemini** – Kod, architektura, style CSS

## 📋 Główne Funkcjonalności

* **Wersja 3.0 (Ostateczna):** Stabilny, sprawdzony kod zoptymalizowany pod kątem niezawodności wydruku.
* **Wydruk A4 (Pixel-Perfect):** Automatyczne generowanie arkusza zawierającego "ORYGINAŁ" i "KOPIĘ" na jednej kartce A4, z zachowaniem wymogów formalnych.
* **Inteligentne Autouzupełnianie:**
    * Baza stacji kolejowych (podpowiedzi przy wpisywaniu).
    * Automatyczne kopiowanie stacji nadania/przeznaczenia do kolejnych wierszy.
    * Przycisk "DZIŚ" do szybkiego wstawiania daty.
* **Auto-Zapis (Local Storage):** Dane są zapisywane w przeglądarce w czasie rzeczywistym. Po odświeżeniu strony nic nie ginie.
* **Profesjonalny Interfejs:** Czytelny formularz edycji, oddzielony od widoku wydruku.
* **Favicon:** Dedykowana ikona lokomotywy dla łatwej identyfikacji karty w przeglądarce.

## 🚀 Jak używać?

1.  Pobierz pliki z tego repozytorium.
2.  Otwórz plik `index.html` w dowolnej nowoczesnej przeglądarce (Chrome, Edge, Firefox).
3.  Wypełnij formularz na ekranie (dane nagłówkowe, lista przesyłek).
4.  Kliknij przycisk **🖨️ DRUKUJ DOKUMENTY**.
5.  W oknie drukowania upewnij się, że:
    * Format papieru to **A4**.
    * Marginesy są ustawione na **Domyślne** lub **Minimalne** (zależnie od drukarki).
    * Opcja "Grafika w tle" (Background graphics) jest zaznaczona (opcjonalnie, dla lepszego kontrastu nagłówków).

## 🛠️ Technologie

* **HTML5 / CSS3:** Struktura i style (sztywny układ tabelaryczny dla wydruku).
* **JavaScript (Vanilla JS):** Logika aplikacji, brak zewnętrznych frameworków.
* **Base64 SVG:** Ikona aplikacji zaszyta bezpośrednio w kodzie.

---
*Ostatnia aktualizacja: Luty 2026*