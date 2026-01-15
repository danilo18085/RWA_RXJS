import { Subject, mergeMap, of, tap, delay, BehaviorSubject } from "rxjs";
import { Notifikacije } from "../Interfejsi/notifikacijeInterface";


export const notifikacijaSubject$ = new Subject<Notifikacije>()


export function notifikacija_sub() : void
{
    notifikacijaSubject$.pipe(
        mergeMap(n =>
            of(n).pipe(
        tap(() => showToast(n.poruka)),
        delay(n.trajanje)
    )
  )
).subscribe()

}


function showToast(text: string) 
{
    const container = document.getElementById("notifikacije")
    const toast = document.createElement("div");
    toast.className = "toast show";
    toast.textContent = text;

    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3300);
}



