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
