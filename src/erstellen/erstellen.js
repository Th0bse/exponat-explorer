"use strict";

import stylesheet from "./erstellen.css";
import erstellen from "./erstellen.html";

class Erstellen {

    constructor(app) {
        this.app = app;

    }

    onShow() {
        //create Container from imported HTML
        this.container = document.createElement("div");
        this.container.innerHTML = erstellen.trim();

        this.app.addExponat();

        this.initListeners();


        let content = {
            className: "erstellen",
            main: this.container.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;

    }

    werteHolen(con) {
        this.werte = [];

        // Holt Inhalte aus Inputfeldern und speichert in Variablen
        let inputLink = this.container.querySelector("#inputLink");
        let inputTitel = this.container.querySelector("#inputTitel");
        let inputKuenstler = this.container.querySelector("#inputKuenstler");
        let inputOrt = this.container.querySelector("#inputOrt");
        let inputErstelldatum = this.container.querySelector("#inputErstelldatum");
        let inputAusstellungszeitraum = this.container.querySelector("#inputAusstellungszeitraum");
        let inputWert = this.container.querySelector("#inputWert");
        let inputAusstellungsort = this.container.querySelector("#inputAusstellungsort");
        let inputBeschreibung = this.container.querySelector("#inputBeschreibung");
        let inputEpoche = this.container.querySelector("#inputEpoche");

        // Geholte Inputwerte werden in Array eingefügt
        this.werte[0] = inputLink;
        this.werte[1] = inputTitel;
        this.werte[2] = inputKuenstler;
        this.werte[3] = inputOrt;
        this.werte[4] = inputErstelldatum;
        this.werte[5] = inputAusstellungszeitraum;
        this.werte[6] = inputWert;
        this.werte[7] = inputAusstellungsort;
        this.werte[8] = inputBeschreibung;
        this.werte[9] = inputEpoche;

        console.log(this.werte);
    }

    werteLoeschen() {
        removeExponat(name);
        console.log("loeschen");
    }

    initListeners() {
        let saveButton = this.container.querySelector("#hinzufuegen");
        saveButton.addEventListener("click", () => this.werteHolen());

         let deleteButton = this.container.querySelector("#loeschen");
         deleteButton.addEventListener("click", () => this.werteLoeschen());
    }

    get title() {
        return "Erstellen";
    }

}

export default Erstellen;
