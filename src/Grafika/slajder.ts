
export function postavi_slajder() : void
{
    const slajd_kontejner = document.createElement("div") //div koji sve obuhvata
    slajd_kontejner.id = "slajder_kontejner"
    slajd_kontejner.className = "slajder_kontejner"

    const slajder = document.createElement("input")
    slajder.id = "slajder"
    slajder.type = "range"
    slajder.min = "5"
    slajder.max = "80"
    slajder.step = "5"
    slajder.value = "80"

    slajd_kontejner.appendChild(slajder)

    const labele_div = document.createElement("div")
    labele_div.className = "labele_div"

    const lab1 = document.createElement("label")
    const lab2 = document.createElement("label")
    const lab3 = document.createElement("label")

    lab2.id = "labela_slajdera"
    lab1.innerHTML = "1$"
    lab2.innerHTML = "80$"
    lab3.innerHTML = "80$"

    labele_div.append(lab1, lab2, lab3)

    slajd_kontejner.appendChild(labele_div)

    const korpa_i_parametri_div = document.getElementById("korpa_i_parametri_div")
    korpa_i_parametri_div.appendChild(slajd_kontejner)
}