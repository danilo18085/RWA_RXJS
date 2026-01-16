import { dugme_brisi_iz_korpe$ } from "../Stream/button_stream"

export function dodaj_element_u_korpu(naziv : string, cena : number) : void
{
    const igrice_u_korpi = document.getElementById("igrice_u_korpi")
    const element_div = document.createElement("div")

    element_div.id = `korpa_element${generisi_id(igrice_u_korpi)}`
    element_div.className = "element_div"

    element_div.innerHTML = 
    `
        <div class="element_mali_div">
            <p>${naziv}</p>
            <p class="mali_padding">${cena.toFixed(2)}$</p>
        </div>
    `
    const div_x = document.createElement("div")
    div_x.classList = "element_x no-select"
    div_x.innerHTML = "X"
    div_x.addEventListener("click", () => dugme_brisi_iz_korpe$.next({id: element_div.id, cena: cena}));
    element_div.appendChild(div_x)

    azuriraj_ukupnu_cenu(cena)

    igrice_u_korpi.appendChild(element_div)
}

function generisi_id(korpa : HTMLElement) : string
{
    if(korpa.lastChild === null)
        return "1"
    else
        return String(Number(korpa.lastElementChild.id.slice(-1)) + 1)
}

export function azuriraj_ukupnu_cenu(cena_igre : number) : void
{
    const labela_ukupne_cene = document.getElementById("ukupna_cena")
    let poslednja_cena = Number(labela_ukupne_cene.innerHTML.slice(0, -1))
    let nova_cena = poslednja_cena + cena_igre
    labela_ukupne_cene.innerHTML = nova_cena.toFixed(2) + "$"
}