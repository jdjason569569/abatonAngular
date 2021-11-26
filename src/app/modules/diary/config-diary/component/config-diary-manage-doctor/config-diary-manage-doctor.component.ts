import { Component, OnInit } from '@angular/core';
import { ConfigDiaryManageDoctorFacade } from '../../facade/ConfigDiaryManageDoctor.facade';
declare var $;
declare var jQuery: any;

@Component({
  selector: 'app-config-diary-manage-doctor',
  templateUrl: './config-diary-manage-doctor.component.html',
  styleUrls: ['./config-diary-manage-doctor.component.css'],
  providers: [ConfigDiaryManageDoctorFacade]
})
export class ConfigDiaryManageDoctorComponent implements OnInit {

  dayAgentCalendar=[{ "date": '2020-03-25', "badge": false, "title": "Seleccionado", "classname": "purple" },
  { "date": '2020-03-26', "badge": false, "title": "Seleccionado", "classname": "purple" },
  { "date": '2020-03-29', "badge": false, "title": "Seleccionado", "classname": "purple" }
];

  
facade: ConfigDiaryManageDoctorFacade;
constructor(private configDiaryManageDoctorFacade: ConfigDiaryManageDoctorFacade) {
  this.facade = this.configDiaryManageDoctorFacade;
  //console.log('constructor component doctor')
}

ngOnInit() {
  //console.log(' oinit  component doctor')
  this.facade = this.configDiaryManageDoctorFacade;
}

  

}
