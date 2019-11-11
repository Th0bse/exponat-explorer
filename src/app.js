"use strict";

import stylesheet from "./app.css";

import Steckbrief from "./steckbrief/steckbrief.js";
import Navigo from "navigo/lib/navigo.js";
import Overview from "./overview/overview.js";
import Startview from "./startview/startview.js";
import Detail from "./detail/detail.js";
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
            this._title = "My App";
            this._currentView = null;

        this._router = new Navigo(null, true);
        this._currentUrl = "";

        this._router.on({
            "detail/display/:id":   params => this.showDetail(params.id, "display"),
            "detail/new":           () => this.showDetail("", "new"),
            "overview":            () => this.showOverview(),
            "start":            () => this.showStartView(),
            "steckbrief":            () => this.showSteckbrief(),
            "*":                    () => this.showOverview(),
        });

        this._router.hooks({
        after: (params) => {
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

    einlesen(){
      this.addExponat("./img/exponat_bilder/exponat_katzen.jpg","Wildkatzen","Manfred Uwe","Schwarzwald","25.08.2004","01.01.2012-01.01.2020","Willi-Hellermann-Museum");
      this.addExponat("./img/exponat_bilder/exponat_kopf.jpg","Maya Kopf","-","Amerika","1055","02.10.2017-01.08.2025","Montopolinten Museum of Art");
      this.addExponat("./img/exponat_bilder/exponat_spiegel.jpg","Antiker Spiegel","Otto Wingler","Schwarzwald","1896","19.04.2005-01.01.2030","Kultur-Museum Karlsruhe");
      this.addExponat("./img/exponat_bilder/exponat_stoffbox.jpg","Stoffschatulle","-","USA","24.03.1790","02.06.2002-20.02.2022","Louvre");
      this.addExponat("./img/exponat_bilder/exponat_toterpanda.jpg","Toter Panda","Margit Czeniz","Sydeny","18.05.2000","01.01.2009-01.01.3000","Naturkunde-Museum Heidelberg");
      this.addExponat("./img/exponat_bilder/exponat_windraad.jpg","Windraad Herkules","Harald Schütz","München","14.03.1968","01.01.2012-01.01.2020","Deutsches Museum");

    }

    showOverview() {
        let view = new Overview(this);
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


    showDetail(id, mode){
        let view = new Detail(this, id, mode);
        this._switchVisibleView(view);
    }
    }

    export default App;
