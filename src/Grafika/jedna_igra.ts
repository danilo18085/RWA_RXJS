import { igrica } from "../Interfejsi/IgricaInterface"
import { dugme_dodaj_u_korpu$ } from "../Stream/button_stream"

export function crtaj_kontejner_za_jednu_igricu(igra : igrica) : HTMLDivElement
{
    const kontejner_igrica = document.createElement("div")
    kontejner_igrica.className = "kontejner_igrica"
    kontejner_igrica.id = ("kontejner_igrica_" + igra.id)

    kontejner_igrica.innerHTML = `
    <img src="./src/Slike/${igra.id}.jpg" alt="${igra.ime}" class="image_wrapper">
    <h3>${igra.ime}</h3>
    <p>Zanr: ${igra.zanr}</p>
    <p>Godina: ${igra.godina}</p>
    <p>Rating: ${igra.rating.toFixed(1)}</p>
    <div class="divider_linija"></div>
    
    <div class="cena_kontejner">
       <h3>${izracunaj_cenu(igra.osnovna_cena, igra.popust)}$</h3>
       <h3>-${igra.popust}%</h3>
    </div>
    `

    const btn = document.createElement("button")
    btn.innerHTML = "Dodaj u korpu"
    btn.addEventListener("click", () => dugme_dodaj_u_korpu$.next(igra.id))
    kontejner_igrica.appendChild(btn)

    return kontejner_igrica
}

export function izracunaj_cenu(osnovna_cena : number, popust : number) : string
{
    return ((osnovna_cena * (100 - popust)) / 100 - 0.01).toFixed(2)
}