import { delay, mergeMap, of, Subject, tap } from "rxjs";
import { start } from "./Grafika/start";
import { notifikacija_sub, notifikacijaSubject$ } from "./Stream/notifikacija_stream";


start()

notifikacija_sub()

const dugme = document.getElementById("test")

dugme.addEventListener('click', () => {
  notifikacijaSubject$.next({poruka: "Ovo je neka poruka", trajanje: 3000})
});



