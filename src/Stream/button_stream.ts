import { fromEvent, Observable, Subject, throttleTime } from "rxjs";
import { notifikacija$ } from "./notifikacija_stream";
import { igrica } from "../Interfejsi/IgricaInterface";
import { azuriraj_ukupnu_cenu, dodaj_element_u_korpu } from "../Grafika/element_u_korpi";
import { izracunaj_cenu } from "../Grafika/jedna_igra";

export let dugme_placanje$ = new Observable()

export function dugme_placanje_sub() : void
{
    const dugme = document.getElementById("dugme_placanje")
    
    dugme_placanje$ = fromEvent(dugme, "click").pipe(
        throttleTime(1500)
    )
}

export function dugme_placanje_func() : void
{
    const igrice_u_korpi = document.getElementById("igrice_u_korpi")

    if(igrice_u_korpi.children.length !== 0)
    {
        igrice_u_korpi.replaceChildren()

        const ukupna_cena = document.getElementById("ukupna_cena")
        ukupna_cena.innerHTML = "0$"
        
        notifikacija$.next({poruka: "Uspesno ste porucili igre!", trajanje: 5000})
        notifikacija$.next({poruka: "Bicete preusmereni na stranicu za placanje", trajanje: 5000})
    }
}


export let dugme_dodaj_u_korpu$ = new Subject<string>()

export async function dodaj_u_korpu(id_igre : string) : Promise<any>
{
    const rez : Response = await fetch(`http://localhost:3000/igrice/${id_igre}`)
    const jedna_igra : igrica = await rez.json()
    
    dodaj_element_u_korpu(jedna_igra.ime, Number(izracunaj_cenu(jedna_igra.osnovna_cena, jedna_igra.popust)))
} 

export let dugme_brisi_iz_korpe$ = new Subject<{id: string, cena: number}>()

export function brisi_iz_korpe(id_elementa_iz_korpe : string, cena : number) : void
{
    const element = document.getElementById(id_elementa_iz_korpe)
    element.remove()

    azuriraj_ukupnu_cenu(cena * (-1))
}