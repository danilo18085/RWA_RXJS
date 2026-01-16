import { checkbox_sub, checkbox$ } from "./checkbox_stream"
import { notifikacija_sub } from "./notifikacija_stream"
import { search_sub, search$ } from "./search_stream"
import { range_sub, slajder$ } from "./slajder_stream"


export function start_stream()
{
    notifikacija_sub()
    search_sub()
    checkbox_sub()
    range_sub()
    
    search$.subscribe(x => {console.log("Search je vratio: ", x)})
    checkbox$.subscribe(x => {console.log("Checkbox je vratio: ", x)})
    slajder$.subscribe(x => console.log("Slajder je vratio: ", x))
}


