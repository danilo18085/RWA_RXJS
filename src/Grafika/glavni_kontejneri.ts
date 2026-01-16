
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
    header_text.innerHTML = "Game Shop"

    gornji_main.appendChild(header_text)
    gornji_main.appendChild(div_za_search)


    const input_bar = document.createElement("input")

    input_bar.type = "text"
    input_bar.placeholder = "Pretrazite igricu..."
    input_bar.autocomplete = "off"
    input_bar.id = "input_za_search"

    div_za_search.appendChild(input_bar)
}


export function crtaj_donji_main_div() : void
{
    const skup_igrica_kontejner = document.createElement("div")
    const korpa_i_parametri_div = document.createElement("div")

    skup_igrica_kontejner.className = "skup_igrica_kontejner"
    skup_igrica_kontejner.id = "skup_igrica_kontejner"

    korpa_i_parametri_div.className = "korpa_i_parametri_div"
    korpa_i_parametri_div.id = "korpa_i_parametri_div"

    const donji_main_div = document.getElementById("div_donji_main")
    donji_main_div.appendChild(skup_igrica_kontejner)
    donji_main_div.appendChild(korpa_i_parametri_div)
}