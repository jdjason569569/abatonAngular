import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceContractAddFacade } from '../../facade/serviceContractAdd.facade';
declare var $;
//import jquery = require("jquery");

@Component({
  selector: 'app-service-contract-add',
  templateUrl: './service-contract-add.component.html',
  providers: [ServiceContractAddFacade]
})
export class ServiceContractAddComponent implements OnInit {
  @ViewChild('table_serv_contract', { static: true }) table: ElementRef;
  dataTable: any;
  facade: ServiceContractAddFacade;


  //$:any

  constructor(private constantFacade: ServiceContractAddFacade) {

    this.facade = this.constantFacade;
    //console.log( this.facade)
  }

  ngOnInit() {
    this.facade = this.constantFacade;

    // this.dataTable = $(this.table.nativeElement);
    //console.log(this.dataTable)
    // this.tableView()

  }

  tableView() {
    this.dataTable = $(this.table.nativeElement);
    console.log(this.dataTable)
    this.dataTable.DataTable({
      "pagingType": "full_numbers"
    });

  }


}
