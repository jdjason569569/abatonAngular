import { Injectable } from '@angular/core';
import { InsServContract } from 'app/models/InsServContract';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class ServiceContractService {

  constructor(private http: HttpClient) { }

  getListServiceContract(id: number) {
    return this.http.get(`${AppSettings.API_URL}contract/addService/${id}/list`);
  }
  
  save(list: Array<InsServContract>, idCont: number) {
    return this.http.post(`${AppSettings.API_URL}contract/addService/${idCont}/add`, list);
  }

  getListTaMa() {
    return this.http.get(`${AppSettings.API_URL}tariffManual/list`);
  } 
 
}
