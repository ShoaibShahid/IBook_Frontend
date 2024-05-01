import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JsonService {
  constructor() {}

  doStringify = (data: any) => {
    return JSON.stringify(data);
  };

  doParse = (data: string) => {
    return JSON.parse(data);
  };

  arrayToJson = (arr: any) => {
    return Object.assign({}, arr);
  };
}
