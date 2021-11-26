import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';
import { SystemConstant } from 'app/models/SystemConstant';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor(private http: HttpClient) { }

  getListConstant() {
    return this.http.get(`${AppSettings.API_URL}constant/list`);
  }
  save(obj: SystemConstant) {
    return this.http.post(`${AppSettings.API_URL}constant/constant/`, obj);
  }
  update(obj: SystemConstant) {
    return this.http.put(`${AppSettings.API_URL}constant/constant/`, obj);
  }
  delete(obj: SystemConstant) {
    return this.http.delete(`${AppSettings.API_URL}constant/constant/` + obj.idConstant);
  }
  getListInst() {
    return this.http.get(`${AppSettings.API_URL}constant/listInst`);
  }
}
