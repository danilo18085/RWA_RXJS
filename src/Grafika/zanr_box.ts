

export function postavi_zanr_box()
{
    const zanr_box_div = document.createElement("div")
    zanr_box_div.className = "zanr_box_div"
    zanr_box_div.id = "zanr_box_div"

    zanr_box_div.innerHTML = `
    <div class="red_unutar_boxa">
        <label><input type="checkbox" value="RPG"> RPG</label>
        <label>Action<input type="checkbox" value="Action"></label>
    </div>
    <div class="red_unutar_boxa">
        <label><input type="checkbox" value="Detective"> Detective</label>
        <label>Horror<input type="checkbox" value="Horror"></label>
    </div>
    <div class="red_unutar_boxa">
        <label><input type="checkbox" value="Adventure"> Adventure</label>
        <label>Shooter<input type="checkbox" value="Shooter"> </label>
    </div>
    <div class="red_unutar_boxa">
        <label><input type="checkbox" value="Sandbox"> Sandbox</label>
        <label>Sports<input type="checkbox" value="Sports"></label>
    </div>
    `

    const korpa_i_parametri_div = document.getElementById("korpa_i_parametri_div")
    korpa_i_parametri_div.appendChild(zanr_box_div)
}