
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

    div_za_search.appendChild(input_bar)
    div_za_search.appendChild(search_dugme)

    search_dugme.innerHTML = "Pretraga"
}


