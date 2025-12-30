import {map, take, interval, Subscription, range, Subject, filter, takeUntil, from, Observable, fromEvent, debounceTime, switchMap} from "rxjs"

const URL = "http://localhost:3000/movies/"




async function fetchuj_podatke(title: string)
{
    const resp = await fetch(URL + title)
    const lista = await resp.json()
    return lista
}

function dodaj_input()
{
    const inputEL = document.createElement("input")
    document.body.appendChild(inputEL)

    fromEvent(inputEL, "input").pipe(
        debounceTime(500),
        map(ev => (<HTMLInputElement>ev.target).value),
        filter(x => x.length >= 3),
        switchMap(x => fetchuj_podatke(x))
    ).subscribe(movie => {console.log("Fetchovao si: ", movie)})
}

dodaj_input()


//from(fetchuj_podatke("movies/harry_potter")).subscribe(el => {console.log("dobio sam: ", el)})
