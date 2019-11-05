"use strict";

import stylesheet from "./steckbrief.css";
import steckbrief from "./steckbrief.html";

class Steckbrief {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = steckbrief.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        //let section = container.querySelector("#overview").cloneNode(true);
        console.log(container);
        let content = {
            className: "steckbrief",
            main: container.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Steckbrief";
    }
}

export default Steckbrief;
