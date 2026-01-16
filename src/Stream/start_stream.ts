import { crtaj_kontejner_za_jednu_igricu } from "../Grafika/jedna_igra"
import { Filter } from "../Interfejsi/filterInterface"
import { igrica } from "../Interfejsi/IgricaInterface"
import { checkbox_sub, checkbox$ } from "./checkbox_stream"
import { filter$, filter_sub, vrati_igre } from "./filter_stream"
import { notifikacija_sub } from "./notifikacija_stream"
import { search_sub, search$ } from "./search_stream"
import { promeni_vrednost_slajder_labele, range_sub, slajder$ } from "./slajder_stream"


export function start_stream() : void
{
    notifikacija_sub()
    search_sub()
    checkbox_sub()
    range_sub()
    filter_sub()
    
    //search$.subscribe(x => {console.log("Search je vratio: ")})
    //checkbox$.subscribe(x => {console.log("Checkbox je vratio: ", x)})
    slajder$.subscribe(x => promeni_vrednost_slajder_labele(x))
    filter$.subscribe(x => {console.log("Filter je vratio: ", x)})
    //-----------------------------------------------------------
    filter$.subscribe((parametri : Filter) => vrati_igre(parametri))
}




