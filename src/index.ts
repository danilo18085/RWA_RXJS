import { debounceTime, delay, distinctUntilChanged, fromEvent, map, mergeMap, of, startWith, Subject, tap } from "rxjs";
import { start } from "./Grafika/start";
import { notifikacija_sub } from "./Stream/notifikacija_stream";
import { search$, search_sub } from "./Stream/search_stream";
import { checkbox$, checkbox_sub } from "./Stream/checkbox_stream";

//-----------------------------------------------
start()
notifikacija_sub()
search_sub()
checkbox_sub()
//------------------------------------------------

search$.subscribe(x => {console.log("Search je vratio: ", x)})
checkbox$.subscribe(x => {console.log("Checkbox je vratio: ", x)})










