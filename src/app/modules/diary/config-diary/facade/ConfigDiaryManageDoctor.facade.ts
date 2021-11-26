import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { Constants } from 'app/constants/Constans';
import { ConfigDiaryManageDoctorState } from '../state/configDiaryManageDoctor.state';
import { ConfigDiaryService } from '../service/config-diary.service';
import { InsConsultation } from 'app/models/InsConsultation';
import { SwalAlerts } from 'app/components/shared/SwalAlerts';
declare var $;
declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class ConfigDiaryManageDoctorFacade implements OnInit {
  //optionValueState: ProfileFuncState;


  constructor(private dto: ConfigDiaryManageDoctorState, private router: Router,
    private service: ConfigDiaryService, private activatedRoute: ActivatedRoute,
    private swal: SwalAlerts) {
    this.dto.listConsultationInsert = [];
    this.listDiaryDayAllMonthCalendar();

    //this.calendar();
    // console.log('constructor facade doctor',this.dto)
    this.generateConsultation();
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    // console.log('oninit facade doctor')
    //this.calendar();
  }

  getSt() {
    return this.dto;
  }

  listDiaryDayAllMonthCalendar() {
    this.service.listDiaryDayAllMonthCalendar()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.dayAgentCalendar = resp.data;
            this.dto.dayAgentCheck = [];
            if (this.dto.dayAgentCalendar.length <= 0) {
              console.log('no se encontraron registros');
            }
            this.calendar();
          } else {
            console.log('no se trajo información');
            this.swal.errorTopRigth('error al consultar dias con agenda');
          }
        }, error => {
          console.log(error);
          this.swal.errorTopRigth('error al consultar dias con agenda');
        });
  }


  generateConsultation() {
    var listCons: InsConsultation[] = [];
    let shedule = {
      "h1": 8,
      "h2": null,
      "h3": null,
      "h4": 9
    }
    console.log('list date: ', this.dto.dayAgentCalendar);
    if (this.dto.dayAgentCalendar != null) {
      for (let day of this.dto.dayAgentCalendar) {
        if (day.insert != null && day.insert === true) {
          console.log('dia agenda', day.date)
          var c1 = new Date(day.date.toString()+' 00:00:00-05');
          //var c1 = new Date(day.date);
          //var c1 = new Date('2020-04-30 00:00:00-05');
          c1.setHours(shedule.h1);
          var c2 = new Date(day.date.toString()+' 00:00:00-05');
          //var c2 = new Date(day.date);
          c2.setHours(shedule.h4);
          let timeCons = 30;
          let cont = 1;
          console.log('c1: ', c1, ' c2: ', c2)
          while (c1 < c2 || c1 === c2) {
            let cons: InsConsultation = new InsConsultation();
            cons.dateCons = new Date(c1.toUTCString());         
            cons.dateConsString = c1.toISOString();
            cons.idDocOffice = 1;
            cons.idSpeciality = 1;
            cons.stateCons = "libre";
            this.dto.listConsultationInsert.push(cons);
             console.log(cons, this.dto.listConsultationInsert)
             console.log('munutos: ',c1.getMinutes())
            c1.setMinutes(c1.getMinutes() + timeCons)
            cons=null;
            cont++;
          }
        }
      }
      console.log('lista const dia ', this.dto.listConsultationInsert);
    
    } else {
      console.log('null: ');
    }
  }

  insertListConsultation() {
    if (this.dto.listConsultationInsert != null && this.dto.listConsultationInsert.length > 0) {
      this.service.insertListConsultation(this.dto.listConsultationInsert)
        .subscribe(
          (resp: JSendResponse) => {
            if (resp.status === Constants.SUCCESS) {
              let respInsert: Boolean = resp.data;
              //this.dto.dayAgentCheck = [];
              if (respInsert) {
                this.swal.successTopRigth('consultas guardadas');
                this.dto.listConsultationInsert=[];
                this.listDiaryDayAllMonthCalendar();
              }

            } else {
              console.log('no se trajo información');
              this.swal.errorTopRigth('error al insertar consultas de la agenda');
            }
          }, error => {
            console.log(error);
            this.swal.errorTopRigth('error al insertar consultas de la agenda');
          });
    } else {
      console.log('debe selecionar dias y generar las consultas');
      this.swal.errorTopRigth('debe selecionar dias y generar las consultas');
    }

  }

  calendar() {
    console.log('entra al calendario', this.dto.dayAgentCalendar)
    var dayAgent = this.dto.dayAgentCalendar;
    var dayAgentCheck = this.dto.dayAgentCheck;
    var dayAllCalendar = this.dto.dayAgentCalendar;
    var tit = this.dto.titulo;
    // inicia codigo jQuery
    (function ($) {
      // console.log('...codigo jQuery....');
      //console.log('...vector dias con agenda....',dayAgent);

      $(document).ready(function () {
        $("#my-calendar").zabuto_calendar({
          action: function () {
            return myDateFunction(this.id);
          },
          action_nav: function () {
            return myNavFunction(this.id);
          },
          data: dayAllCalendar,
          language: "es",
          cell_border: true,
          today: true,
          show_days: true,
          weekstartson: 1,
          nav_icon: {
            prev: '<i class="fa fa-chevron-circle-left"></i>',
            next: '<i class="fa fa-chevron-circle-right"></i>'
          },
          legend: [
            { type: "block", label: "Dias con agenda", classname: 'yellow' },
            { type: "block", label: "Dias selecionados", classname: 'purple' }
          ]

        });
      });



      function myDateFunction(id) {

        // console.log('tit:',tit,' titulo dt:',dayAllCalendar);
        tit = 'select ' + id;
        var date = $("#" + id).data("date");
        var to = $("#" + id).data("to");
        // document.getElementById("frmDiary:dateString").value = date;
        var hasEvent = $("#" + id).data("hasEvent");
        console.log('hasEvent', hasEvent, ' - date:', date, ' to:', to)
        if (hasEvent) {
          console.log('--return false-- para quitar de la lista el seleccionado');
          // removeDaySel();
          return false;
        }


        //addDaySel();  
        dayAllCalendar.push({ "date": date, "badge": false, "title": "Seleccionado", "classname": "yellow", "insert": true });
        dayAgentCheck.push({ "date": date, "badge": false, "title": "Seleccionado", "classname": "yellow", "insert": true });
        //console.log('get data:', $("#" + id));
        // console.log('--return true-- para agregar a la lista el seleccionado',dayAgentCheck);
        return true;
      }

      function myNavFunction(id) {

        var nav = $("#" + id).data("navigation");
        var to = $("#" + id).data("to");
        // console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
      }


    })(jQuery); //cierre codigo jQuery
    // console.log('cierre jquery list calen', this.dto.dayAgentCalendar)
    //this.dto.dayAgentCalendar=dayAgent;
    // console.log('despues de reasignar calendario', this.dto.dayAgentCalendar)

  }

  getDayCheck() {
    console.log('boton dayAgentCalendar:', this.dto.dayAgentCalendar);
    console.log('boton dayAgentCheck:', this.dto.dayAgentCheck);
    console.log('tit met fuera', this.dto.titulo);
    this.dto.titulo = 'cambio des de boton';
    this.calendar();

  }


}