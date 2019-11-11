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



        let template = container.querySelector("#eintraege").innerHTML;

        console.log(template);


            //var index = app.lastClickedExponat;
            var index = 3;
            console.log(this.app);
            console.log(this.app.exponate);
            console.log(this.app.exponate[1]);
            console.log(this.app.exponate[1].titel);

            template = template.replace("$TITEL$", this.app.exponate[index].titel);
            template = template.replace("$KUENSTLER$", this.app.exponate[index].kuenstler);
            template = template.replace("$ORT$", this.app.exponate[index].ort);
            template = template.replace("$ERST_DATUM$", this.app.exponate[index].erstelldatum);
            template = template.replace("$ZEITRAUM$",this.app.exponate[index].ausstellungszeitraum);
            template = template.replace("$AUST_ORT$", this.app.exponate[index].ausstellungsort);

            console.log(template);
            let dummy = document.createElement("div");
            dummy.innerHTML = template;

            container.querySelector(".steckbriefInhalt").appendChild(dummy);

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

    setValues(index){

        }

    get title() {
        return "Steckbrief";
    }
}

export default Steckbrief;
