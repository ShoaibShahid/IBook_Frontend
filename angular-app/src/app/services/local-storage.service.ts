import { Injectable } from "@angular/core";

enum StorageKeys {
  token = "token",
  user_id = "user_id",
  user_email = "user_email",
  username = "username",
}

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  setItem(key: any, data: any) {
    localStorage.setItem(key, data);
  }

  getItem(key: any) {
    return localStorage.getItem(key);
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
  }

  setUserData(data: any) {
    localStorage.setItem(StorageKeys.user_email, data.email);
    localStorage.setItem(StorageKeys.user_id, data.user_id);
    localStorage.setItem(StorageKeys.username, data.username);
  }

  getUserID() {
    return this.getItem(StorageKeys.user_id);
  }

  clearAll() {
    localStorage.clear();
  }
}
