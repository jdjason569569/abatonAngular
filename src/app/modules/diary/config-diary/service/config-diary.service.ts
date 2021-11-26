import { Injectable } from '@angular/core';
import { AppSettings } from 'app/app.settings';
import { HttpClient } from '@angular/common/http';
import { InsConsultation } from 'app/models/InsConsultation';

@Injectable({
  providedIn: 'root'
})
export class ConfigDiaryService {

  constructor(private http: HttpClient) { }

  listDiaryDoctor() {
    return this.http.get(`${AppSettings.API_URL}configDiary/listDiaryDoctor`);
  }
  listDiaryDayAllMonthCalendar() {
    return this.http.get(`${AppSettings.API_URL}configDiary/listDiaryDayAllMonth`);
  }
  listConsultationDayAllDay() {
    return this.http.get(`${AppSettings.API_URL}configDiary/listConsultationDayAllDay`);
  }
  insertListConsultation(listConsultation:InsConsultation[]) {
    return this.http.post(`${AppSettings.API_URL}configDiary/insertListConsultation`, listConsultation);
  }
 
}
