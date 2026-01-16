import { igrica } from "../Interfejsi/IgricaInterface";
import { crtaj_donji_main_div, crtaj_gornji_main_div, postavi_dva_glavna_diva } from "./glavni_kontejneri";
import { crtaj_header } from "./header";
import { crtaj_kontejner_za_jednu_igricu } from "./jedna_igra";
import { crtaj_korpu } from "./korpa";
import { postavi_notifikacije } from "./notifikacije";
import { postavi_slajder } from "./slajder";
import { postavi_zanr_box} from "./zanr_box";

export function start_grafika() : void
{
    crtaj_header()
    postavi_dva_glavna_diva()
    crtaj_gornji_main_div()
    crtaj_donji_main_div()
    crtaj_korpu()
    postavi_slajder()
    postavi_zanr_box()
    postavi_notifikacije()
    //vrati_sve()
}





