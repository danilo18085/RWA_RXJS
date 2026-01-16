
export function crtaj_korpu() : void
{
    const korpa_kontejner = document.getElementById("korpa_i_parametri_div")

    korpa_kontejner.innerHTML = `
    <div class="korpa">
        <div class="naziv_korpe"></div>
        <div class="igrice_u_korpi" id="igrice_u_korpi"></div>
        <div class="cena_kontejner visina">
            <h3>Ukupno:</h3>
            <h3 id="ukupna_cena">0$</h3>
        </div>
        <div class="divider_linija max_velicina"></div>

        <button id="dugme_placanje">Placanje</button>
    </div>
    `
}