"use strict";

import stylesheet from "./erstellen.css";
import erstellen from "./erstellen.html";

class Erstellen {

    constructor(app) {
        this.app = app;

    }

    onShow() {

        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = erstellen.trim();

        this.app.addExponat();

        // init listeners
        let saveButton = container.querySelector("#hinzufuegen");
        saveButton.addEventListener("click", () => this.werteHolen());

        let deleteButton = container.querySelector("#loeschen");
        deleteButton.addEventListener("click", () => this.werteLoeschen());


        let content = {
            className: "erstellen",
            main: container.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;

    }

    werteHolen() {
        
        this.werte = [];

        // Holt Inhalte aus Inputfeldern und speichert in Variablen
        let inputLink = document.getElementById("inputlink").value;
        let inputTitel = document.getElementById("inputTitel").value;
        let inputKuenstler = document.getElementById("inputKuenstler").value;
        let inputOrt = document.getElementById("inputOrt").value;
        let inputErstelldatum = document.getElementById("inputErstelldatum").value;
        let inputAusstellungszeitraum = document.getElementById("inputAusstellungszeitraum").value;
        let inputWert = document.getElementById("inputWert").value;
        let inputAusstellungsort = document.getElementById("inputAusstellungsort").value;
        let inputBeschreibung = document.getElementById("inputBeschreibung").value;
        let inputEpoche = document.getElementById("inputEpoche").value;

        // Fügt in werte Array gespeicherte Variablen
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

        // Speichert werte Array in localStorage
        this.app.addExponat(this.werte);
    }

    werteLoeschen() {

        // Löschte werte Array aus localStorage
        this.app.removeExponat(this.werte);
        console.log("geloescht");
    }

    get title() {
        return "Erstellen";
    }

}

export default Erstellen;
