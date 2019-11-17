"use strict";

import stylesheet from "./app.css";
import Steckbrief from "./steckbrief/steckbrief.js";
import Erstellen from "./erstellen/erstellen.js";
import Navigo from "navigo/lib/navigo.js";
import Overview from "./overview/overview.js";
import Startview from "./startview/startview.js";

/**
 * Hauptklasse der Anwendung. Kümmert sich darum, die Anwendung auszuführen
 * und die angeforderten Bildschirmseiten anzuzeigen.
 */
class App {


    /**
     * Konstruktor.
     */
    constructor() {
        this.exponate=[];
        this.einlesen();
        this.lastClickedExponat = 0;
        this._title = "Exponat Explorer";
        this._currentView = null;
        this._router = new Navigo(null, true);
        this._currentUrl = "";

        this._router.on({
            "start": () => this.showStartView(),
            "steckbrief": () => this.showSteckbrief(),
            "overview": () => this.showOverview(),
            "erstellen": () => this.showErstellen(),
            "*": () => this.showOverview(),
        });

        this._router.hooks({ after: (params) => {
                    // Navigation durchführen, daher die neue URL merken
                    this._currentUrl = this._router.lastRouteResolved().url;
                }
            }
        );
    }

    /**
     * Ab hier beginnt die Anwendung zu laufen.
     */
    start() {
        console.log("Die Klasse App sagt Hallo!");
        this._router.resolve();

    }

    _switchVisibleView(view) {
        // Alles klar, aktuelle View nun wechseln
        document.title = `${this._title} – ${view.title}`;

        this._currentView = view;
        this._switchVisibleContent(view.onShow());
        return true;
    }

    _switchVisibleContent(content) {
        // <header> und <main> des HTML-Grundgerüsts ermitteln
        let app = document.querySelector("#app");
        let header = document.querySelector("#app > header");
        let main = document.querySelector("#app > main");

        // Zuvor angezeigte Inhalte entfernen
        // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
        app.className = "";
        // header.querySelectorAll(".bottom").forEach(e => e.parentNode.removeChild(e));
        main.innerHTML = "";

        // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
        if (content && content.className) {
            app.className = content.className;
        }

        // Neue Inhalte des Hauptbereichs einfügen
        if (content && content.main) {
            content.main.forEach(element => {
                main.appendChild(element);
            });
        }
    }

    einlesen() {
        this.addExponat("https://www.wn.de/var/storage/images/wn/startseite/muensterland/3152621-willi-hellermann-museum-neues-leben-fuer-die-praeparate-schau-1500-exponate-werden-ausgestellt/90902293-8-ger-DE/Willi-Hellermann-Museum-Neues-Leben-fuer-die-Praeparate-Schau-1500-Exponate-werden-ausgestellt1_image_1024_width.jpg", "Wildkatzen", "Manfred Uwe", "Schwarzwald", "25.08.2004", "01.01.2012-01.01.2020","50000€", "Willi-Hellermann-Museum","Die Wildkatze (Felis silvestris) ist eine Art aus der Familie der Katzen, die in verschiedenen Unterarten in Europa (vergleiche Europäische Wildkatze), Afrika, Westasien, Zentralasien bis nach Indien heimisch ist.","Barock");
        this.addExponat("https://upload.wikimedia.org/wikipedia/commons/e/eb/Metropolitain_Museum_of_Art_Exponat.jpg", "Maya Kopf", "-", "Amerika", "1055", "02.10.2017-01.08.2025","50000€", "Montopolinten Museum of Art","Die Maya sind ein indigenes Volk bzw. eine Gruppe indigener Völker in Mittelamerika, die insbesondere aufgrund der von ihnen im präkolumbischen Mesoamerika gegründeten Reiche und ihrer hoch entwickelten Kultur bekannt sind.","Barock");
        this.addExponat("https://i.pinimg.com/originals/36/7a/71/367a7176fa6491115818d8b3b303f2d6.jpg", "Antiker Spiegel", "Otto Wingler", "Schwarzwald", "1896", "19.04.2005-01.01.2030","50000€", "Kultur-Museum Karlsruhe","Ein Spiegel (von lat. speculum „Spiegel, Abbild“ zu lat. specere „sehen“) ist eine reflektierende Fläche – glatt genug, dass reflektiertes Licht nach dem Reflexionsgesetz seine Parallelität behält und somit ein Abbild entstehen kann.","Barock");
        this.addExponat("https://www.br.de/franken/inhalt/kultur/jean-paul-museum-exponate-106~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg?version=251cd", "Stoffschatulle", "-", "USA", "24.03.1790", "02.06.2002-20.02.2022","50000€", "Louvre","Die Schatulle (Lehnwort von lat. scatula; siehe auch Schachtel) ist ein kleineres, häufig kunsthandwerklich aufwendig gestaltetes Behältnis zur Aufbewahrung von mehr oder weniger wertvollen Dingen (Geld, Schmuck und Ähnliches). Eine Schatulle kann aus Holz, Leder, Stein (Schmuckstein), Elfenbein oder auch Metall gearbeitet sein und diente im Mittelalter häufig als Minnegabe.[","Barock");
        this.addExponat("https://static.az-cdn.ch/__ip/7cTR2m9GuEQb-eK7zLev_a4A4bo/a34ee733d1deea50c1171bf191260c6767cfe367/remote.adjust.rotate=0&remote.size.w=3200&remote.size.h=2129&local.crop.h=1800&local.crop.w=3200&local.crop.x=0&local.crop.y=127&r=1,n-wide2x-16x9", "Toter Panda", "Margit Czeniz", "Sydeny", "18.05.2000", "01.01.2009-01.01.3000","50000€", "Naturkunde-Museum Heidelberg","Der Große Panda (Ailuropoda melanoleuca), auch Riesenpanda oder Pandabär, ist eine Säugetierart aus der Familie der Bären (Ursidae).","Barock");
        this.addExponat("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRBK_Zyjekv1lPczTfFqf0hIT1nDzi7YoQyPDOmfCZcycD9Rj4w&s", "Windraad Herkules", "Harald Schütz", "München", "14.03.1968", "01.01.2012-01.01.2020","50000€", "Deutsches Museum","Die Windmühle ist ein technisches Bauwerk, das mit seinen vom Wind in Drehung versetzten Flügeln Arbeit verrichtet. Am meisten verbreitet war die Nutzung als Mühle, deswegen wird die Bezeichnung auf alle derartigen Anlagen übertragen.","Barock");

      //  window.localStorage.setItem("exponate", JSON.stringify(exponate));
// DEBUG:
//         console.log(this.exponate);
//         this.removeExponat("Wildkatzen");
//         console.log(this.exponate);
    }


    addExponat(link, titel, kuenstler, ort, erstelldatum, ausstellungszeitraum,wert, ausstellungsort,beschreibung,epoche) {
        var einExpo = [link, titel, kuenstler, ort, erstelldatum, ausstellungszeitraum,wert, ausstellungsort,beschreibung,epoche];
        localStorage.setItem(einExpo[1],JSON.stringify(einExpo));
    }
    getExponat(titel) {
      var dasExpo = JSON.parse(localStorage.getItem(titel));

      return dasExpo;
    }

    getAllExponate() {
        let exponate = [];
        let keys = Object.keys(localStorage);
        let i = keys.length;

        while (i--) {
            exponate.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        return exponate;
    }

    removeExponat(name) {
        for (var i = 0; i < this.exponate.length; i++) {
            if (this.exponate[i].titel == name) {
                delete this.exponate[i];
            }
        }
    }

    showOverview() {
        let view = new Overview(this);
        this._switchVisibleView(view);
    }

    showErstellen() {
        let view = new Erstellen(this);
        this._switchVisibleView(view);
    }

    showStartView() {
        let view = new Startview(this);
        this._switchVisibleView(view);
    }

    showSteckbrief() {
        let view = new Steckbrief(this);
        this._switchVisibleView(view);
    }
}

export default App;
