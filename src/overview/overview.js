"use strict";

import stylesheet from "./overview.css";
import overview from "./overview.html";

class Overview {

    constructor(app){
        this.app = app;
        this.exp = [{
          "name"        : "Test 1",
          "description" : "Das ist eine Bechreibung"
      },{
          "name"        : "Test 2",
          "description" : "Das ist auch eine Beschreibung"
      }]
    };

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = overview.trim();
        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#overview").cloneNode(true).innerHTML;

        for (let expKey in this.exp) {
            let dummy = document.createElement("div");
            dummy.innerHTML = section;


            // replace Placeholders in the html template with actual values
            section.innerHTML.replace("$$NAME$$", expKey.name);
            section.innerHTML.replace("$$DESCRIPTION$$", expKey.description);
        }
        let content = {
            className: "overview",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Overview;
