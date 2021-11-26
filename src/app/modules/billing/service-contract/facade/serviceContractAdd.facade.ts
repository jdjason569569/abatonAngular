import { OnInit, Injectable } from '@angular/core';
import { ServiceContractAddState } from '../state/serviceContractAdd.state';
import { JSendResponse } from 'app/models/JSendResponse';
import { Constants } from 'app/constants/Constans';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceContractService } from '../service/service-contract.service';
import { InsServContract } from 'app/models/InsServContract';
import { SwalAlerts } from 'app/components/shared/SwalAlerts';
import { InsContract } from 'app/models/InsContract';



@Injectable({
  providedIn: 'root'
})
export class ServiceContractAddFacade implements OnInit {
  //optionValueState: ProfileFuncState;

  constructor(private dto: ServiceContractAddState, private router: Router,
     private service: ServiceContractService, private activatedRoute: ActivatedRoute,
     private swal: SwalAlerts) {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.listTaMa();
      this.dto.mapInsSerContract = new Map();
      this.listServiceContract(params.id);
      this.dto.contract = this.activatedRoute.snapshot.queryParams;
    }

  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //this.dto.profile = JSON.parse(localStorage.getItem('profile'));

    if (params.id) {
      this.listTaMa();
      this.dto.mapInsSerContract = new Map();
      this.listServiceContract(params.id);
      this.dto.contract = this.activatedRoute.snapshot.queryParams;
    }

    
  }

 /* hello() {
    $(document).ready(function(){
      console.log("Hello from jQuery!");
    });
  }*/

  getSt() {
    return this.dto;
  }

  listServiceContract(id: number) {
    this.service.getListServiceContract(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listInsSerContract = resp.data;
           // console.log(this.dto.listInsSerContract)
          }
        }, error => {
          console.log(error);
        });

  }



  saveServContract() {
    const idProfile: number = +this.activatedRoute.snapshot.params.id;
    var list = this.parseMapToListSercContract(this.dto.mapInsSerContract);
    console.log(list)
    this.service.save(list, idProfile).subscribe(
      (data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          
           this.swal.successTopRigth('servicios actualizados');
          this.router.navigate(['abaton/contract']);
        } else {
          
          this.swal.errorTopRigth('Error al agregar');   
           
                            
        }
      },
      error => {
        //console.log('entra al  error', error);
        this.swal.errorTopRigth('Error al agregar');           
    }
    );
  }

  listChecked(list: Array<InsServContract>, idCont: number) {
    var list2 = [];

    list.forEach(function (currentValue, index, arr) {
      if (list[index].checked === true) {
        list[index].idCont = idCont
        list[index].idServ = list[index].systemService.idServ
        if (list[index].idTama = undefined) {
          list[index].idTama = 1
        }

        list2.push(list[index]);
      }
    })
    return list2;
  }

  parseMapToListSercContract(map: Map<number,InsServContract>) {
    var list2 = [];
    map.forEach(function(service, key, mapT){
      list2.push(service);
    }

    )
    return list2;
  }

  //detecta un cambio adicionando o quitando un servicio
  checkChangeService(sc: InsServContract) {
    if(sc.checked==true){
      sc.checked=!sc.checked
      sc.add=false;
      sc.idTama=null;
      this.dto.mapInsSerContract.set(sc.systemService.idServ,sc)     
      console.log('eliminar')
    }else{
      sc.checked=!sc.checked     
      if(sc.idCont===null){
        sc.idCont = +this.dto.contract.idCont
      }  
      if(sc.idTama===null){
        sc.idTama = +this.dto.contract.idTama
      }   
     sc.add=true;
     this.dto.mapInsSerContract.set(sc.systemService.idServ,sc)      
      console.log('agregar')
    }
    console.log(sc)
    console.log(this.dto.mapInsSerContract)
  }

  selectChange(event: any,sc: InsServContract) {
    this.dto.tamaSelected = event.target.value; 

    console.log(this.dto.tamaSelected)
    if(sc.checked===true){         
     sc.add=true;
     if (this.dto.tamaSelected==='null') {
      sc.idTama=null;
     }else{
      sc.idTama=+this.dto.tamaSelected
     }
    
     this.dto.mapInsSerContract.set(sc.systemService.idServ,sc)         
      console.log('cambio editar')
    }else{     
      sc.add=null;
      sc.idTama=null
      this.dto.tamaSelected=null

      console.log('cambio NO agregar')
    }
    console.log(sc)
    console.log(this.dto.mapInsSerContract)
  }

  addOrDeleteService(add:boolean,sc: InsServContract){
    if(add){
      //agregar 

    }else{

    }

  }

  

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.dto.tamaSelected = event.target.value;
    console.log(event)
    console.log(this.dto.tamaSelected)
   
  }

  backToContract(){
    this.dto.mapInsSerContract = new Map();
    this.dto.listInsSerContract = [];
      this.dto.contract = new InsContract();
    this.router.navigate([`abaton/contract/`]);
  }

  
  listTaMa() {
    this.service.getListTaMa()
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listTaMa = resp.data;
           // console.log(this.dto.listInsSerContract)
          }
        }, error => {
          console.log(error);
          this.swal.errorTopRigth('no se cargaron manuales tarifarios');
        });

  }

}