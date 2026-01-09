import { crtaj_donji_main_div, crtaj_gornji_main_div, crtaj_kontejner_za_jednu_igricu, postavi_dva_glavna_diva } from "./crtanje";

postavi_dva_glavna_diva()
crtaj_gornji_main_div()
crtaj_donji_main_div()


const element = document.getElementById("skup_igrica_kontejner")
element.appendChild(crtaj_kontejner_za_jednu_igricu("FarCry6"))

const kasa_div = document.getElementById("kasa_div")

let p = document.createElement("p")
p.innerHTML = "LOREM IPSUM DOLOR DOLOR"
kasa_div.appendChild(p)

