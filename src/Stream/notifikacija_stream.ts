import { Subject, tap } from "rxjs";
import { Notifikacije } from "../Interfejsi/notifikacijeInterface";


export const notifikacija$ = new Subject<Notifikacije>()


export function notifikacija_sub() : void
{
    notifikacija$.pipe(
        tap((x : Notifikacije) => showToast(x))
    ).subscribe()
}


function showToast(notf : Notifikacije) 
{
    const container = document.getElementById("notifikacije")
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = notf.poruka;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), notf.trajanje);
}



