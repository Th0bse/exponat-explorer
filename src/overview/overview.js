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
        let section = container.querySelector("#overview").cloneNode(true);

        // build table

        console.log("render table");
        let table = document.createElement("table");
        console.log(table.innerHTML);
        table.innerHTML = "";


        let headerTemplate = container.querySelector("#table-header").innerHTML;
        console.log(headerTemplate);
        let header = document.createElement("tr");
        header.innerHTML = headerTemplate;
        table.appendChild(header);
        console.log(table);

        // append the individual rows to the table, one per exponat
        let contentTemplate = container.querySelector("#table-content").innerHTML;
        console.log(contentTemplate);
        let contentRow = document.createElement("tr");
        contentRow.innerHTML = contentTemplate;
        table.appendChild(contentRow);

        container.querySelector("main > div").appendChild(table);
        console.log(container);
        let content = {
            className: "overview",
            //main: section.querySelectorAll("main > *"),
            main: container.querySelectorAll("main > *"),
        };

        console.log(content);
        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Overview;
