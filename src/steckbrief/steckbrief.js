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

        let backButton = container.querySelector("#back_button_overview");
        backButton.addEventListener("click", () => this.app.showOverview());




        let template = container.querySelector("#eintraege").innerHTML;

        // console.log(this.app.lastClickedExponat);
            var dasExpo=this.app.getExponat(this.app.lastClickedExponat);

            template = template.replace("$TITEL$", dasExpo[1]);
            template = template.replace("$KUENSTLER$", dasExpo[2]);
            template = template.replace("$ORT$", dasExpo[3]);
            template = template.replace("$ERST_DATUM$", dasExpo[4]);
            template = template.replace("$ZEITRAUM$",dasExpo[5]);
            template = template.replace("$AUST_ORT$", dasExpo[7]);
            template = template.replace("$BESCHR$", dasExpo[8]);
            template = template.replace("$EPOCHE$",dasExpo[9]);
            template = template.replace("$WERT$", dasExpo[6]);
            let pic = document.createElement("img");
            pic.src=dasExpo[0];
            pic.setAttribute("class","anzBild");
            // console.log(pic);
          //  container.querySelector(".steckbrief_bild").appendChild();


            //var pic = document.querySelector("#steckbrief_bild");
            //console.log(pic);
          //
          //  pic.src=dasExpo[0];


            let dummy = document.createElement("div");
            dummy.innerHTML = template;
            dummy.appendChild(pic);


            container.querySelector(".steckbriefInhalt").appendChild(dummy);

        // Anzuzeigende HTML-Elemente ermitteln
        //let section = container.querySelector("#overview").cloneNode(true);
        // console.log(container);
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
