var wprowadz = prompt("Podaj hasło");
if (!wprowadz) {   /// kod znaleziony gdzieś tam
    if (confirm("Nie wpisałeś swojego hasła"));
    { window.location.reload(); }
}
var haslo = wprowadz.toUpperCase();
var wynik = new Array(); //tablica na podkreslenie
for (var j = 0; j < haslo.length; j++) {
    wynik[j] = '_';
}
var wykorzystane = new Array();
var zle = 0;
var dobrze = 0;
var ile = 0;
function restart() {
    setTimeout("location.reload(true);", 1);
}
function gra() {
    var pobierz = document.getElementById('litera').value;
    var litera = pobierz.toUpperCase();
    //
    var info = document.getElementById('info'); //zwracane po kazdym wcisnieciu guzika
    var obrazy = new Array('wisielec1.png', 'wisielec2.png', 'wisielec3.png', 'wisielec4.png', 'wisielec5.png', 'wisielec6.png', 'wisielec7.png', 'wisielec8.png', 'wisielec9.png', 'wisielec10.png');
    var warunek = false;
    var plansza = document.getElementById('zdjecie');
    if (!litera || litera.length > 1) {      //warunek sprawdzajacy podanie litery
        info.innerHTML = "Nie podano litery!"
    }
    else {
        var test = false;
        if (ile >= 1) {      //do konca tego ifa kod z jakiegos powodu po prostu nie działa 
            for (var j = 0; j < wykorzystane.length; j++) {
                if (wykorzystane[j] == litera) {
                    test = true;
                }
                else {
                    continue;
                }
            }
        }
        else {
            wykorzystane += String(litera);
        }
        if (test == true) {
            info.innerHTML = "Ten znak został już wcześniej użyty!";
            wykorzystane.pop(litera);
        }
        else {
            if (ile != 0) {
                wykorzystane += String(litera);
            }
            for (var i = 0; i < haslo.length; i++) {        //sprawdza czy podana literka jest w hasle
                if (String(haslo[i]) == String(litera)) {
                    wynik[i] = ' ' + litera;
                    warunek = true; //warunek potwierdzajacy poprawna odpowiedz zeby nie liczylo bledu
                    info.innerHTML = "Trafiono litere!";
                    dobrze += 1;
                }
                else {
                    if (wynik[i] != ' _') { //dodanie do niepoprawnych miejsc _ nwm czy działa bez tych 2 warunkow
                        continue;
                    }
                    else {
                        wynik[i] = ' _';    //nwm co to
                    }
                }
            }
            if (warunek != true) {  //tutaj doliczenie błedu i ewentualny koniec gry
                zle += 1;
                plansza.src = obrazy[Number(zle)]
                var costam = 9 - zle;
                document.getElementById('bledy').innerHTML = 'Możesz popełnić jeszcze ' + costam + ' błędów.';
                info.innerHTML = "Pudło!"
                if (zle >= 9) {
                    document.getElementById('right').style.color = 'red';
                    document.getElementById('right').innerHTML = 'Niestety przegrałeś!';
                }
            }
            else { //tutaj doliczenie punktu i ewentualny koniec gry
                if (dobrze == haslo.length) {
                    document.getElementById('right').style.color = 'gold';
                    document.getElementById('right').innerHTML = 'Wygranko!';
                }
            }
        }
        document.getElementById('used').innerHTML = wykorzystane;   //pokazuje wykorzystane juz litery
        document.getElementById('wynik').innerHTML = 'Hasło: ' + wynik;  //wynik koncowy
        ile++;
    }
}