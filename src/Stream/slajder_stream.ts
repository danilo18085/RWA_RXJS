import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith } from "rxjs";


export let slajder$ = new Observable<number>()

export function range_sub()
{
    const cenaRange = document.getElementById('slajder') as HTMLInputElement;

    slajder$ = fromEvent(cenaRange, 'input').pipe(
        map(() => Number(cenaRange.value)),
        debounceTime(150),
        distinctUntilChanged(),
        startWith(Number(cenaRange.value))
        )
}

export function promeni_vrednost_slajder_labele(nova_vrednost : number) : void
{
    const slajder_labela = document.getElementById("labela_slajdera")
    slajder_labela.innerHTML = String(nova_vrednost) + "$"
}