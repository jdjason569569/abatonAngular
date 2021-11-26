import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../../../../app.settings';
import {SystemOptionValue} from '../../../../models/SystemOptionValue';

@Injectable({
  providedIn: 'root'
})
export class OptionValueService {

  constructor(private http: HttpClient) { }

  getListOptionValue(id: number) {
    return this.http.get(`${AppSettings.API_URL}option/view/${id}/list`);
  }

  getListOptionValueByCode(code: string) {
    return this.http.get(`${AppSettings.API_URL}option/view/${code}/listCode`);
  }

  saveOptionValue(option: SystemOptionValue) {
    return this.http.post(`${AppSettings.API_URL}option/view/${option.idOpt}/create`, option);
  }
  updateOptionValue(option: SystemOptionValue) {
    return this.http.put(`${AppSettings.API_URL}option/view/${option.idOpt}/update`, option);
  }
  deleteOptionValue(option: SystemOptionValue) {
    return this.http.delete(`${AppSettings.API_URL}option/view/${option.idOpt}/delete/${option.idOptVal}`);
  }
}
