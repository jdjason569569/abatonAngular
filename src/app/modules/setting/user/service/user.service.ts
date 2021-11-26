import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemUser } from '../../../../models/SystemUser';
import { timeout } from 'rxjs/operators';
import { AppSettings } from '../../../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getListUserService() {
    return this.http.get(`${AppSettings.API_URL}user/listUser`);
  }
  saveUser(user: SystemUser) {
    return this.http.post(`${AppSettings.API_URL}user/user`, user);
  }
  updateUser(user: SystemUser) {
    return this.http.put(`${AppSettings.API_URL}user/user/`, user);
  }
  deleteUser(id: number) {
    return this.http.delete(`${AppSettings.API_URL}user/user/` + id);
  }
  getListOptionValueService() {
    return this.http.get(`${AppSettings.API_URL}user/optionValue`);
  }
}
