"use strict";

import stylesheet from "./erstellen.css";
import erstellen from "./erstellen.html";

class Erstellen {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = erstellen.trim();

        // Anzuzeigende HTML-Elemente ermitteln

        //let section = container.querySelector("#overview").cloneNode(true);
        console.log(container);
        let content = {
            className: "erstellen",
            main: container.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Erstellen";
    }

    

}

export default Erstellen;
