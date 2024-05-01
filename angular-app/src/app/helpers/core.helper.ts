import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: "root",
})

export class CoreHelper {
    createUrl(actionName: string): string {
        return `${environment.API_BASE_URL}${actionName}`;
    }

}