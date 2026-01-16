import { Subject, tap } from "rxjs";
import { Notifikacija } from "../Interfejsi/notifikacijeInterface";


export const notifikacija$ = new Subject<Notifikacija>()


export function showToast(notf : Notifikacija) 
{
    const container = document.getElementById("notifikacije")
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = notf.poruka;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), notf.trajanje);
}



