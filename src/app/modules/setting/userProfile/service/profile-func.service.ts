import { Injectable } from '@angular/core';
import { AppSettings } from 'app/app.settings';
import { HttpClient } from '@angular/common/http';
import { SystemProfileFunct } from '../../../../models/SystemProfileFunct';

@Injectable({
  providedIn: 'root'
})
export class ProfileFuncService {
  constructor(private http: HttpClient) { }

  getListProfileFunc(id: number) {
    return this.http.get(`${AppSettings.API_URL}profile/view/` + id + `/list`);
  }
  getTreeViewProfileFunc(id: number) {
    return this.http.get(`${AppSettings.API_URL}profile/view/` + id + `/tree`);
  }

  save(list: Array<SystemProfileFunct>, idProfile: number) {
    return this.http.post(`${AppSettings.API_URL}profile/view/` + idProfile + `/profileFunc`, list);
  }
  update(item: SystemProfileFunct) {
    return this.http.put(`${AppSettings.API_URL}profile/view/` + item.idProfile + `/profileFunc`, item);
  }
  delete(id: number) {
    return this.http.delete(`${AppSettings.API_URL}profile/view/` + id + `/profileFunc/` + id);
  }
}
