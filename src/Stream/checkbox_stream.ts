import { fromEvent, map, Observable, startWith } from "rxjs";

export let checkbox$ = new Observable<string[]>()

export function checkbox_sub()
{
    const checkboxContainer = document.getElementById("zanr_box_div")!;

    checkbox$ = fromEvent(checkboxContainer, 'change').pipe(
        map(() => {
            const checked = checkboxContainer.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked')
            return Array.from(checked).map(cb => cb.value)}),
        startWith([])
    )
}
