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

        // Anzuzeigende HTML-Elemente ermitteln

        //let section = container.querySelector("#overview").cloneNode(true);
        console.log(container);

        init();
        let content = {
            className: "erstellen",
            main: container.querySelectorAll("main > *"),
        };

        this.werteHolen();

        // neues exponat einfügen
        app.addExponat(werte[2], werte[0], );

        // Ergebnis zurückliefern
        return content;


    //     function init() {
    //         var button = container.querySelector("#mehr");
    //         console.log(button);
    //         button.onclick = ToDoHinzufügen;
    //
    //         var clearButton = container.querySelector('#loeschen');
    //         clearButton.onclick = allesLöschen;
    //
    //         var eintraegeArray = HolEinträge();
    //
    //         for (var i = 0; i < eintraegeArray.length; i++) {
    //             var aufgabeNr = eintraegeArray[i];
    //             var value = JSON.parse(localStorage[aufgabeNr]);
    //             insDOMschreiben(aufgabeNr, value);
    //         }
    //     }
    //
    //     function HolEinträge() {
    //         var eintraegeArray = localStorage.getItem('eintraegeArray');
    //         if (!eintraegeArray) {
    //             eintraegeArray = [];
    //             localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
    //         } else {
    //             eintraegeArray = JSON.parse(eintraegeArray);
    //         }
    //         return eintraegeArray;
    //     }
    //
    //     function ToDoHinzufügen() {
    //         var eintraegeArray = HolEinträge();
    //         var value = container.querySelector("#eingabe").value;
    //         if (value != '') {
    //             var currentDate = new Date();
    //             var aufgabeNr = 'aufgabe_' + currentDate.getTime()
    //             var aufgabeText = {
    //                 'value': value
    //             };
    //             localStorage.setItem(aufgabeNr, JSON.stringify(aufgabeText));
    //             eintraegeArray.push(aufgabeNr);
    //             localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
    //             insDOMschreiben(aufgabeNr, aufgabeText);
    //             document.getElementById('eingabe').value = ' ';
    //         } else {
    //             alert('Bitte geben Sie etwas ein!');
    //         }
    //
    //         console.log(eintraegeArray);
    //     }
    //
    //     function toDoLöschen(e) {
    //         var aufgabeNr = e.target.id;
    //         var eintraegeArray = HolEinträge();
    //         if (eintraegeArray) {
    //             for (var i = 0; i < eintraegeArray.length; i++) {
    //                 if (aufgabeNr == eintraegeArray[i]) {
    //                     eintraegeArray.splice(i, 1);
    //                 }
    //             }
    //             localStorage.removeItem(aufgabeNr);
    //             localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
    //             ausDOMentfernen(aufgabeNr);
    //         }
    //     }
    //
    //     function insDOMschreiben(aufgabeNr, ItemObj) {
    //         var eintraege = document.getElementById('eintraege');
    //         var eintrag = document.createElement('li');
    //         eintrag.setAttribute('id', aufgabeNr);
    //         eintrag.innerHTML = ItemObj.value;
    //         eintraege.appendChild(eintrag);
    //         eintrag.onclick = toDoLöschen;
    //     }
    //
    //     function ausDOMentfernen(aufgabeNr) {
    //         var eintrag = document.getElementById(aufgabeNr);
    //         eintrag.parentNode.removeChild(eintrag);
    //     }
    //
    //     function allesLöschen() {
    //         localStorage.clear();
    //         var ItemList = document.getElementById('eintraege');
    //         var eintraege = ItemList.childNodes;
    //         for (var i = eintraege.length - 1; i >= 0; i--) {
    //             ItemList.removeChild(eintraege[i]);
    //         }
    //         var eintraegeArray = HolEinträge();
    //     }
    //
    //
    //     function readURL(input) {
    //         if (input.files && input.files[0]) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (e) {
    //                 $('#img').attr('src', e.target.result);
    //             }
    //
    //             reader.readAsDataURL(input.files[0]);
    //         }
    //     }
    //
    //     $("#bildUpload").change(function () {
    //         readURL(this);
    //     });
    //
    //
    }

    werteHolen() {
        this.werte = [];
        let inputTitel = container.querySelector("#inputTitel");
        // alle anderen Felder
        // zB let inputBeschreibung = container.querySelector.......;

        werte[0] = inputTitel.value();
        // alle anderen Felder
        // zB werte[1] = inputBeschreibung.value();
    }

    get title() {
        return "Erstellen";
    }


}

export default Erstellen;
