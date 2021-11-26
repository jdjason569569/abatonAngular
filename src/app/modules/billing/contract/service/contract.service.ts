import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';
import { InsContract } from 'app/models/InsContract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }


 
  getListContract() {
    return this.http.get(`${AppSettings.API_URL}contract/list`);
  }
  save(obj: InsContract) {
    return this.http.post(`${AppSettings.API_URL}contract/contract/`, obj);
  }
  update(obj: InsContract) {
    return this.http.put(`${AppSettings.API_URL}contract/contract/`, obj);
  }
  delete(obj: InsContract) {
    return this.http.delete(`${AppSettings.API_URL}contract/contract/`+ obj.idCont);
  }
 
  getListInst() {
    return this.http.get(`${AppSettings.API_URL}constant/listInst`);
  } 

  getListTaMa() {
    return this.http.get(`${AppSettings.API_URL}tariffManual/list`);
  } 





}
