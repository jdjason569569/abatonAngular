import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private http: HttpClient) { }

  getListSpecialityService() {
    return this.http.get(`${AppSettings.API_URL}speciality/listSpeciality`);
  }
  deleteSpeciality(id: number) {
    return null;
  }
}
