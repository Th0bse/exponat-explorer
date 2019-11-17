"use strict";

import stylesheet from "./overview.css";
import overview from "./overview.html";

class Overview {

    constructor(app){
        this.app = app;
    };

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = overview.trim();
        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#overview").cloneNode(true);

        // build table

        // console.log("render table");
        let table = document.createElement("table");
        // console.log(table.innerHTML);
        table.innerHTML = "";


        let headerTemplate = container.querySelector("#table-header").innerHTML;
        // console.log(headerTemplate);
        let header = document.createElement("tr");
        header.innerHTML = headerTemplate;
        table.appendChild(header);
        // console.log(table);

        let exponate = this.app.getAllExponate();

        // console.log(exponate);
        // console.log(exponate[1]);

        // append the individual rows to the table, one per exponat
        for (let i = 0; i < exponate.length; i++) {
            let contentTemplate = container.querySelector("#table-content").innerHTML;
            // console.log(contentTemplate);
            let contentRow = document.createElement("tr");

            contentTemplate = contentTemplate.replace("$NAME$", exponate[i][1]);
            contentTemplate = contentTemplate.replace("$DESC$", exponate[i][8]);
            contentTemplate = contentTemplate.replace("$IMAGE$", document.createElement("img")
                .setAttribute("src", exponate[i][0]));

            contentRow.innerHTML = contentTemplate;
            table.appendChild(contentRow);

            contentRow.querySelector("a").addEventListener("click",
                () => this.setClickedExponat(exponate[i][1]));
        }

        container.querySelector("main > .rahmen").appendChild(table);
        // console.log(container);
        let content = {
            className: "overview",
            //main: section.querySelectorAll("main > *"),
            main: container.querySelectorAll("main > *"),
        };

        // console.log(content);
        // Ergebnis zurückliefern
        return content;
    }

    setClickedExponat(name) {
        console.log("name= " + name);
        this.app.lastClickedExponat = name;
        console.log(this.app.lastClickedExponat);
    }

    get title() {
        return "Übersicht";
    }
}

export default Overview;
