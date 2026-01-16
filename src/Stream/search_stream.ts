import { fromEvent, map, debounceTime, distinctUntilChanged, startWith, Observable, filter } from "rxjs";


export let search$ = new Observable<string>()

export function search_sub() : void
{
    const searchInput = document.getElementById('input_za_search') as HTMLInputElement

    search$ = fromEvent(searchInput, 'input').pipe(
        map(() => searchInput.value.trim()),
        filter((rec : string) => rec.length >= 2 || rec.length === 0),
        debounceTime(300),
        distinctUntilChanged(),
        startWith('')
    )
}
