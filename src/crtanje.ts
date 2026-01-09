import { igrica } from "./Interfejsi/IgricaInterface"

export function postavi_dva_glavna_diva() : void
{
    const main_container = document.createElement("div")
    const div_gornji_main = document.createElement("div")
    const div_donji_main = document.createElement("div")

    main_container.className = "main_container"
    main_container.id = "main_container"
    div_gornji_main.className = "div_gornji_main"
    div_gornji_main.id = "div_gornji_main"
    div_donji_main.className = "div_donji_main"
    div_donji_main.id = "div_donji_main"

    document.body.appendChild(main_container)
    main_container.appendChild(div_gornji_main)
    main_container.appendChild(div_donji_main)
}

export function crtaj_gornji_main_div() : void
{
    const gornji_main = document.getElementById("div_gornji_main")
    const header_text = document.createElement("h2")
    const div_za_search = document.createElement("div")

    div_za_search.className = "div_za_search"
    header_text.innerHTML = "Games Prodavnica"

    gornji_main.appendChild(header_text)
    gornji_main.appendChild(div_za_search)


    const input_bar = document.createElement("input")
    const search_dugme = document.createElement("button")

    input_bar.type = "text"
    input_bar.placeholder = "Pretrazite igricu..."
    input_bar.autocomplete = "off"

    div_za_search.appendChild(input_bar)
    div_za_search.appendChild(search_dugme)

    search_dugme.innerHTML = "Pretraga"
}


export function crtaj_donji_main_div() : void
{
    const skup_igrica_kontejner = document.createElement("div")
    const kasa_div = document.createElement("div")

    skup_igrica_kontejner.className = "skup_igrica_kontejner"
    skup_igrica_kontejner.id = "skup_igrica_kontejner"

    kasa_div.className = "kasa_div"
    kasa_div.id = "kasa_div"

    const donji_main_div = document.getElementById("div_donji_main")
    donji_main_div.appendChild(skup_igrica_kontejner)
    donji_main_div.appendChild(kasa_div)
}


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
     <p>Rating: ${igra.rating}</p>
     <div class="divider_linija"></div>
     
     <div class="cena_kontejner">
     <h3>Cena ${izracunaj_cenu(igra.osnovna_cena, igra.popust)}$</h3>
     <h3>-${igra.popust}%</h3>
     </div>
      
     <button>KUPI</button>
    `
    return kontejner_igrica
}

function izracunaj_cenu(osnovna_cena : number, popust : number) : string
{
    return ((osnovna_cena * (100 - popust)) / 100 - 0.01).toFixed(2)
}

export function crtaj_header() : void
{
    const h = document.createElement("div")
    h.className = "header"
    document.body.appendChild(h)
}