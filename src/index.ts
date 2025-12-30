import {map, take, interval, Subscription, range, Subject, filter, takeUntil} from "rxjs"


function pokreni_interval(control$: Subject<any>) : Subscription
{
    const tok$: Subscription = interval(500).pipe(
        filter(x => x % 2 === 0),
        map(x => x + 1),
        takeUntil(control$)
    ).subscribe(x => {console.log("Broj: " + x)})

    return tok$
}

function make_button1(control$: Subject<any>)
{
   const button = document.createElement("button")
   button.innerHTML = "STOP DUGME"
   button.onclick = () => 
    {
        control$.next(1)
        control$.complete()
        console.log("ZAVRSIO SAM SUBSCRIPTION")
    }
   document.body.appendChild(button) 
}


const kontrola_toka$ = new Subject()

make_button1(kontrola_toka$)
pokreni_interval(kontrola_toka$)

