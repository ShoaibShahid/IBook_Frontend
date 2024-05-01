import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: "root",
})
export class ToastrNotificationService {
  constructor(
    private toastrService: ToastrService
  ) {}

  showSuccess = (message: string) => {
    this.toastrService.success(message, "Success!");
  };

  showError = (message: string) => {
    this.toastrService.error(message, "Oops!");
  };

  showWarning = (message: string) => {
    this.toastrService.warning(message, "Alert!");
  };

  showInfo = (
    message: string,
  ) => {
    this.toastrService.info(message, 'Info');
  };

}
