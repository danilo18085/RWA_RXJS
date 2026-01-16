import { Filter } from "../Interfejsi/filterInterface"
import { brisi_iz_korpe, dodaj_u_korpu, dugme_brisi_iz_korpe$, dugme_dodaj_u_korpu$, dugme_placanje$, dugme_placanje_func, dugme_placanje_sub } from "./button_stream"
import { checkbox_sub } from "./checkbox_stream"
import { filter$, filter_sub, vrati_igre } from "./filter_stream"
import { notifikacija_sub } from "./notifikacija_stream"
import { search_sub } from "./search_stream"
import { promeni_vrednost_slajder_labele, range_sub, slajder$ } from "./slajder_stream"


export function start_stream() : void
{
    search_sub()
    checkbox_sub()
    range_sub()
    filter_sub()
    dugme_placanje_sub()
    notifikacija_sub()
    
    dugme_dodaj_u_korpu$.subscribe((x : string) => dodaj_u_korpu(x))
    dugme_brisi_iz_korpe$.subscribe((x : {id: string, cena: number}) => brisi_iz_korpe(x.id, x.cena))

    slajder$.subscribe((x : number) => promeni_vrednost_slajder_labele(x))
    filter$.subscribe((x : Filter) => {console.log("Filter je vratio: ", x)})
    filter$.subscribe((parametri : Filter) => vrati_igre(parametri))
    dugme_placanje$.subscribe(() => dugme_placanje_func())
}




