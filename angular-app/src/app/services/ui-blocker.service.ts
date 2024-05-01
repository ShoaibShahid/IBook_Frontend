import { Injectable } from "@angular/core";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Injectable()
export class UiBlockerService {
  @BlockUI() blockUI: NgBlockUI | any;
  constructor() {}

  start() {
    this.blockUI.start(); // Start blocking
  }

  stop() {
    this.blockUI.stop(); // Stop blocking
  }
}
