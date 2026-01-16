import { combineLatest, map, Observable } from "rxjs";
import { checkbox$ } from "./checkbox_stream";
import { search$ } from "./search_stream";
import { slajder$ } from "./slajder_stream";
import { Filter } from "../Interfejsi/filterInterface";
import { crtaj_kontejner_za_jednu_igricu, izracunaj_cenu } from "../Grafika/jedna_igra";
import { igrica } from "../Interfejsi/IgricaInterface";


export let filter$ = new Observable<Filter>()

export function filter_sub() : void
{
    filter$ = combineLatest([search$, checkbox$, slajder$]).pipe(
    map(([search_prom, zanr_prom, max_cena_prom]): Filter => 
        ({
        search: search_prom,
        zanr: zanr_prom,
        max_cena: max_cena_prom,
    }))
    )
}

export async function vrati_igre(parametri : Filter) : Promise<any>
{
    const skup_igrica_kontejner = document.getElementById("skup_igrica_kontejner")

    const rez : Response = await fetch(`http://localhost:3000/igrice`)
    let niz : igrica[] = await rez.json()

    niz = filtriraj_igre(niz, parametri)

    skup_igrica_kontejner.replaceChildren()
    niz.forEach((igra : igrica) => 
    {
        skup_igrica_kontejner.appendChild(crtaj_kontejner_za_jednu_igricu(igra))
    })
}

function filtriraj_igre(niz: igrica[], parametri: Filter) : igrica[]
{
    let novi_niz = niz

    if(parametri.zanr.length !== 0)
        novi_niz = novi_niz.filter((igra : igrica) => parametri.zanr.includes(igra.zanr))

    if(parametri.search.length !== 0)
        novi_niz = novi_niz.filter((igra : igrica) => igra.ime.toLowerCase().includes(parametri.search.toLowerCase()))

    if(parametri.max_cena !== 100)
        novi_niz = novi_niz.filter((igra : igrica) => Number(izracunaj_cenu(igra.osnovna_cena, igra.popust)) <= parametri.max_cena)

    return novi_niz
}

