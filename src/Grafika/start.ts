import { igrica } from "../Interfejsi/IgricaInterface";
import { crtaj_donji_main_div, crtaj_gornji_main_div, postavi_dva_glavna_diva } from "./glavni_kontejneri";
import { crtaj_header } from "./header";
import { crtaj_kontejner_za_jednu_igricu } from "./jedna_igra";
import { crtaj_korpu } from "./korpa";
import { postavi_notifikacije } from "./notifikacije";
import { postavi_slajder } from "./slajder";
import { postavi_zanr_box} from "./zanr_box";

export function start() : void
{
    crtaj_header()
    postavi_dva_glavna_diva()
    crtaj_gornji_main_div()
    crtaj_donji_main_div()
    crtaj_korpu()
    postavi_slajder()
    postavi_zanr_box()
    postavi_notifikacije()
    vrati_sve()
}


async function vrati_sve() : Promise<any>
{

    const rez = await fetch(`http://localhost:3000/igrice`)
    const niz : any[] = await rez.json()
    

    const skup_igrica_kontejner = document.getElementById("skup_igrica_kontejner")

    niz.forEach(igra => {
        const nova_igra : igrica =
        {
            id: igra.id,
            ime: igra.ime,
            zanr: igra.zanr,
            godina: igra.godina,
            rating: igra.rating,
            popust: igra.popust,
            osnovna_cena: igra.osnovna_cena
        }
        skup_igrica_kontejner.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra))
    });
}


