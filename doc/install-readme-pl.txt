### Wymagania ###
Serwer:
- PHP 5.1 lub nowszy (Zalecana najnowsza stabilna wersja)
- MySQL 4 lub nowszy

Przegladarka:
- Nowoczesna, zgodna z JS/DOM przegladarka (testowane na Firefox 2/3, Internet Explorer 7, Opera 9, Konqueror, Safari)
- Wlaczona obsluga Cookies

### Instrukcja instalacji ###
1. Rozpakuj archiwum.
2. Wgraj wszystko, wlacznie z pustymi katalogami /files i /templates_c na swoj serwer.
(Opcjonalnie mozesz stworzyc katalogi /templates_c i /files recznie przed instalacja)
3. Ustaw nastepujace katalogi oraz foldery dostepnymi do zapisu (chmod 777):
- /templates_c
- /files
- /config/standard/config.php
4. Stworz nowa baze danych MySQL dla oprogramowania  (collation: utf8_general_ci).
5. Uruchom plik install.php i postepuj zgodnie z podanymi tam instrukcjami (np. www.TwojAdres.pl/collab/install.php)


### Instrukcja aktualizacji ###
   1. Rozpakuj archiwum Collab
   2. Pobierz plik config.php ze swojego serwera.
   3. Wstaw plik config.php do katalogu do ktorego rozpakowales archiwum zastepujac pusty plik config.php.
   4. Wgraj wszystko na serwer zastepujac stare pliki i foldery Collab
   5. Uruchom plik update.php na serwerze (np. www.TwojAdres.pl/collabtive/update.php)


### Licencja ###
Collab jest darmowa aplikacja udostepniana na zasadach licencji
GNU General Public License (GPL) (Version 3).
