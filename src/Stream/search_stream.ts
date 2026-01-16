import { fromEvent, map, debounceTime, distinctUntilChanged, startWith, Subject, Observable, tap, BehaviorSubject } from "rxjs";


export let search$ = new Observable<string>()

export function search_sub()
{
    const searchInput = document.getElementById('input_za_search') as HTMLInputElement

    search$ = fromEvent(searchInput, 'input').pipe(
        map(() => searchInput.value.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        startWith(''),
    )
}
