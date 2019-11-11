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
        let table = container.querySelector("#main-table > table");
        console.log(table.innerHTML);
        table.innerHTML = "";


        let headerTemplate = container.querySelector("#table-header").innerHTML;
        console.log(headerTemplate);
        let header = document.createElement("tr");
        header.innerHTML = headerTemplate;
        table.appendChild(header);
        console.log(table);
        //console.log(section.querySelector("#table-header > tr").innerHTML)
        // table.appendChild(container.querySelector("#table-header > tr").cloneNode());

        let content = {
            className: "overview",
            //main: section.querySelectorAll("main > *"),
            main: table
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
