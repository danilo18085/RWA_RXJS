import { Observable, interval, map } from "rxjs";
import { SenzorTip } from "../Tipovi/SenzorTip";
import { SobaTip } from "../Tipovi/SobaTip";
import { SenzorInfo } from "../Interfejs/SenzorInfo";


export abstract class BaseSenzor 
{
    protected abstract senzor_tip : SenzorTip

    constructor(protected soba_tip : SobaTip) {}

    stream() : Observable<SenzorInfo>
    {
        return interval(1500).pipe(
            map(() => ({
                senzor_tip: this.senzor_tip,
                soba_tip: this.soba_tip,
                vrednost: this.generisi_vrednost()
            }))
        )
    }

    protected abstract generisi_vrednost() : number

}