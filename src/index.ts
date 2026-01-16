import { debounceTime, delay, distinctUntilChanged, fromEvent, map, mergeMap, of, startWith, Subject, tap } from "rxjs";
import { start } from "./Grafika/start";
import { notifikacija_sub } from "./Stream/notifikacija_stream";
import { search$, search_sub } from "./Stream/search_stream";

//-----------------------------------------------
start()
notifikacija_sub()
//------------------------------------------------

search_sub()

search$.subscribe((x) => console.log("A: ", x))
search$.subscribe((x) => console.log("B: ", x))









