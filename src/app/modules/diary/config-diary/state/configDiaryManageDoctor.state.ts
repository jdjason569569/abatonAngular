import { Injectable } from '@angular/core';
import { InsConsultation } from 'app/models/InsConsultation';


@Injectable({
  providedIn: 'root'

})
export class ConfigDiaryManageDoctorState {
  //constant: SystemConstant = new SystemConstant();
  listConsultationInsert:InsConsultation[];
  titulo:string = 'hola';
  dayAgentCalendar:{ "date": string, "badge": boolean, "title": string, "classname": string, "insert"?:boolean }[];//dias en los que el doctor tiene consultas
  dayAgentCheck:{ "date": string, "badge": boolean, "title": string, "classname": string, "insert"?:boolean  }[];//dias en los que el doctor tiene consultas
 /* dayAgentCalendar=[{ "date": '2020-03-25', "badge": false, "title": "Seleccionado", "classname": "purple" },
  { "date": '2020-03-26', "badge": false, "title": "Seleccionado", "classname": "purple" },
  { "date": '2020-03-29', "badge": false, "title": "Seleccionado", "classname": "purple" }
]; */

}