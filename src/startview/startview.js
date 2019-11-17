"use strict";

import stylesheet from "./startview.css";
import startview from "./startview.html";

class Startview {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = startview.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let content = {
            className: "startview",
            main: container.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Startseite";
    }
}

export default Startview;
