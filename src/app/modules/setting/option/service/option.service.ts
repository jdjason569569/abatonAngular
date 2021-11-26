import { Injectable } from '@angular/core';
import {SystemUser} from '../../../../models/SystemUser';
import {HttpClient} from '@angular/common/http';
import {SystemOption} from '../../../../models/SystemOption';
import {AppSettings} from '../../../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http: HttpClient) { }


  getListOption() {
    return this.http.get(`${AppSettings.API_URL}option/listOption`);
  }
  saveOption(option: SystemOption) {
    return this.http.post(`${AppSettings.API_URL}option/option`, option);
  }
  updateOption(option: SystemOption) {
    return this.http.put(`${AppSettings.API_URL}option/option`, option);
  }
  deleteOption(id: number) {
    return this.http.delete(`${AppSettings.API_URL}option/option/` + id);
  }
}
