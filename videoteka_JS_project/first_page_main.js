import { newDivElement } from "./elements.js";

let divMain = newDivElement("class", "backgroundMain");
document.body.appendChild(divMain);

let mainP = document.createElement("p");
mainP.setAttribute("id", "firsParagraph");
mainP.innerHTML = "Dobro došli na stranicu videoteke Vremenska kapsula! <br />";
mainP.innerHTML +=
  "Zakoračite u nostalgični svijet gdje se analogno susreće sa zabavom. <br />";
mainP.innerHTML +=
  "Ovdje slavimo kultno VHS doba koje je osvojilo publiku diljem svijeta.Pridružite nam se dok premotavamo vrpcu i istražujemo kolekciju starinskih filmova, cijenjenih klasika i rijetkih dragulja. <br />";
mainP.innerHTML +=
  "oživite čaroliju VHS-a, gdje treperavi zaslon i magnetske vrpce vraćaju sjećanja na jednostavnija vremena. <br />";
mainP.innerHTML +=
  "Bilo da ste iskusni VHS entuzijast ili ste novi u ovom fascinantnom formatu, naša stranica je vaš ulaz u riznicu analognih čuda. Pripremite se da uronite u VHS nostalgiju. <br />";
mainP.innerHTML += "Krenimo zajedno na putovanje kroz vrijeme!";

divMain.appendChild(mainP);
