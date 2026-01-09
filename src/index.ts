import { crtaj_donji_main_div, crtaj_gornji_main_div, crtaj_kontejner_za_jednu_igricu, postavi_dva_glavna_diva } from "./crtanje";
import { igrica } from "./Interfejsi/IgricaInterface";

postavi_dva_glavna_diva()
crtaj_gornji_main_div()
crtaj_donji_main_div()


const element = document.getElementById("skup_igrica_kontejner")
const nova_igra : igrica =
{
    id: "1",
    ime: "Far Cry 6",
    zanr: "Action",
    godina: 2021,
    rating: 8.1,
    popust: 15,
    osnovna_cena: 50.00
} 

const nova_igra_2 : igrica =
{
    id: "4",
    ime: "Red Dead Redemption 2",
    zanr: "Action",
    godina: 2018,
    rating: 9.7,
    popust: 35,
    osnovna_cena: 60.00
}
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))
element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra_2))




const kasa_div = document.getElementById("kasa_div")
let p = document.createElement("p")
p.innerHTML = "LOREM IPSUM DOLOR DOLOR"
kasa_div.appendChild(p)

