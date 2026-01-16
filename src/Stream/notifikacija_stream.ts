import { concatMap, delay, of, Subject } from "rxjs";
import { Notifikacija } from "../Interfejsi/notifikacijeInterface";


export let notifikacija$ = new Subject<Notifikacija>()

export function notifikacija_sub() : void
{
    notifikacija$.pipe(
        concatMap(x => of(x).pipe(delay(2000)))
    ).subscribe((x : Notifikacija) => showToast(x))
}


export function showToast(notf : Notifikacija) : void
{
    const container = document.getElementById("notifikacije")
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = notf.poruka;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), notf.trajanje);
}



