import { SenzorTip } from "../Tipovi/SenzorTip";
import { SobaTip } from "../Tipovi/SobaTip";

export interface SenzorInfo
{
    senzor_tip : SenzorTip,
    soba_tip : SobaTip,
    vrednost : number
}