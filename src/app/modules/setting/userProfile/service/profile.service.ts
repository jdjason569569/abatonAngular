import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';
import { SystemProfile } from '../../../../models/SystemProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`${AppSettings.API_URL}profile/list`);
  }
  insert(profile: SystemProfile) {
    return this.http.post(`${AppSettings.API_URL}profile/profile`, profile);
  }
  update(profile: SystemProfile) {
    return this.http.put(`${AppSettings.API_URL}profile/profile`, profile);
  }
  delete(id: number) {
    return this.http.delete(`${AppSettings.API_URL}profile/profile/` + id);
  }
}
