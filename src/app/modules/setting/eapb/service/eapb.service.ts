import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';
import { SystemEapb } from 'app/models/SystemEapb';

@Injectable({
  providedIn: 'root'
})
export class EapbService {

  
  constructor(private http: HttpClient) { }


 
  getListEapb() {
    return this.http.get(`${AppSettings.API_URL}eapb/list`);
  }
  save(obj: SystemEapb) {
    return this.http.post(`${AppSettings.API_URL}eapb/eapb/`, obj);
  }
  update(obj: SystemEapb) {
    return this.http.put(`${AppSettings.API_URL}eapb/eapb/`, obj);
  }
  delete(obj: SystemEapb) {
    return this.http.delete(`${AppSettings.API_URL}eapb/eapb/${obj.idEapb}`);
  }

}
