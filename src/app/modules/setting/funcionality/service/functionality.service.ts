import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemFunctionality } from '../../../../models/SystemFunctionality';
import { AppSettings } from 'app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {


  constructor(private http: HttpClient) { }


  getListSection() {
    return this.http.get(`${AppSettings.API_URL}functionality/listSection`);
  }
  getListFunctionality(id: number) {
    return this.http.get(`${AppSettings.API_URL}functionality/view/` + id+ `/list`);
  }
  save(obj: SystemFunctionality) {
    return this.http.post(`${AppSettings.API_URL}functionality/view/` + obj.idSection+ `/functionality`, obj);
  }
  update(obj: SystemFunctionality) {
    return this.http.put(`${AppSettings.API_URL}functionality/view/` + obj.idSection+ `/functionality`, obj);
  }
  delete(obj: SystemFunctionality) {
    return this.http.delete(`${AppSettings.API_URL}functionality/view/` + obj.idSection+ `/functionality/` + obj.idFunctionality);
  }
}
