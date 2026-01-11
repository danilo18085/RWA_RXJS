import { crtaj_donji_main_div, crtaj_gornji_main_div, crtaj_header, crtaj_kontejner_za_jednu_igricu, crtaj_korpu, element_korpe, postavi_dva_glavna_diva } from "./crtanje";
import { igrica } from "./Interfejsi/IgricaInterface";


crtaj_header()
postavi_dva_glavna_diva()
crtaj_gornji_main_div()
crtaj_donji_main_div()


const element = document.getElementById("skup_igrica_kontejner")


async function vrati_sve()
{
    for (let i = 1; i<=31;i++)
    {
        const rez = await fetch(`http://localhost:3000/igrice/${i}`)
        const js : igrica = await rez.json()
        
        const nova_igra : igrica =
        {
            id: js.id,
            ime: js.ime,
            zanr: js.zanr,
            godina: js.godina,
            rating: js.rating,
            popust: js.popust,
            osnovna_cena: js.osnovna_cena
        } 

        element.appendChild(crtaj_kontejner_za_jednu_igricu(nova_igra))
        console.log(nova_igra) 
    }
}

vrati_sve()




crtaj_korpu()
element_korpe("nekaidasdasda sdgrasasd asdasd asdasdas asdasdasd asda")
element_korpe("Red Dead Redemption 2")
element_korpe("Sekiro: Shadows die Twice")
