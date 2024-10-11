import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService{
    nbActive: number = 0;
    nbInactive: number = 0;
    countSwitchesActive(){
        this.nbActive++;
        console.log("Swithes to active: " + this.nbActive);
    }

    countSwitchesInactive(){
        this.nbInactive++;
        console.log("Swithes to inactive: " + this.nbInactive);
    }
}