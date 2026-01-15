

export function element_korpe(nesto? : string) : void
{
    const igrice_u_korpi = document.getElementById("igrice_u_korpi")
    const element_div = document.createElement("div")

    element_div.id = "element1"
    element_div.className = "element_div"

    element_div.innerHTML = 
    `
        <div class="element_mali_div">
            <p>${nesto}</p>
            <p class="mali_padding">50.90$</p>
        </div>
        <div class="element_x">
            <p>X</p>
        </div>
    `
    igrice_u_korpi.appendChild(element_div)
}