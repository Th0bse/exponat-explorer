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

        // Holt Inhalte aus Inputfeldern und speichert in Variablen
        let link = document.getElementById("inputlink").value;
        let titel = document.getElementById("inputTitel").value;
        let kuenstler = document.getElementById("inputKuenstler").value;
        let ort = document.getElementById("inputOrt").value;
        let erstelldatum = document.getElementById("inputErstelldatum").value;
        let ausstellungszeitraum = document.getElementById("inputAusstellungszeitraum").value;
        let wert = document.getElementById("inputWert").value;
        let ausstellungsort = document.getElementById("inputAusstellungsort").value;
        let beschreibung = document.getElementById("inputBeschreibung").value;
        let epoche = document.getElementById("inputEpoche").value;

        // Speichert werte Array in localStorage
        this.app.addExponat(link, titel, kuenstler, ort, erstelldatum, ausstellungszeitraum, wert, ausstellungsort, beschreibung, epoche);
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
