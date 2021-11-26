import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JSendResponse } from '../../../../models/JSendResponse';
import { ProfileFuncState } from '../state/profileFunc.state';
import { ProfileService } from '../service/profile.service';
import { SystemProfileFunct } from '../../../../models/SystemProfileFunct';
import { SystemProfile } from '../../../../models/SystemProfile';
import { Constants } from 'app/constants/Constans';
import { ProfileFuncService } from '../service/profile-func.service';
// import { listenToTriggersV2 } from 'angular-bootstrap-md/lib/free/utilities';
import { Directory } from '../components/tree-view/directory';
import { FunctionalityService } from '../../funcionality/service/functionality.service';
import { SystemSection } from 'app/models/SystemSection';
import { SystemFunctionality } from 'app/models/SystemFunctionality';




@Injectable({
  providedIn: 'root'
})
export class ProfileFuncListFacade implements OnInit {
  //optionValueState: ProfileFuncState;

  constructor(private dto: ProfileFuncState, private router: Router, private service: ProfileFuncService, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.listProfileFunc(params.id);
      // this.dto.profile = JSON.parse(localStorage.getItem('profile'));
      this.dto.profile = this.activatedRoute.snapshot.queryParams;
    }
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.listProfileFunc(params.id);
      this.dto.profile = this.activatedRoute.snapshot.queryParams;
    }
  }

  profileFuncSt() {
    return this.dto;
  }

  listProfileFunc(id: number) {
    this.service.getListProfileFunc(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.listProfileFunc = resp.data;
            //crear arbol
            const list = this.dto.listProfileFunc.map((item: any) => {
              const obj: SystemProfileFunct = new SystemProfileFunct();
              obj.idProfFunc = item.idProfFunc
              obj.idProfile = item.idProfile
              obj.idFunctionality = item.idFunctionality
              if (obj.idProfFunc != undefined) {
                obj.checked = true;
              } else {
                obj.checked = false;
              }
              const objF: SystemFunctionality = new SystemFunctionality();
              objF.idFunctionality = item.systemFunctionality.idFunctionality
              objF.idSection = item.systemFunctionality.idSection
              objF.sysIdFunctionality = item.systemFunctionality.sysIdFunctionality
              objF.codFunctionality = item.systemFunctionality.codFunctionality
              objF.nameFunctionality = item.systemFunctionality.nameFunctionality
              objF.descFunctionality = item.systemFunctionality.descFunctionality
              obj.systemFunctionality = objF
              const dir: Directory = new Directory(obj.systemFunctionality.nameFunctionality, [], [], obj, obj.checked);
              return dir;
            });
            var map = {}, node: Directory, roots = [], i;
            for (i = 0; i < list.length; i += 1) {
              map[list[i].data.idFunctionality] = i; // initialize the map
              list[i].directories = []; // initialize the children
            }
            for (i = 0; i < list.length; i += 1) {
              node = list[i];

              if (node.data.systemFunctionality.sysIdFunctionality !== null) {
                // if you have dangling branches check that map[node.parentId] exists
                list[map[node.data.systemFunctionality.sysIdFunctionality]].directories.push(node);
              } else {
                roots.push(node);
              }
            }
            this.dto.directories = roots


            if (this.dto.listProfileFunc.length <= 0) {
              console.log('no se encontraron registros');
            }
          } else {
            console.log('no se trajo información');
          }
        }, error => {
          console.log(error);
        });
  }

  listChecked(list: Array<SystemProfileFunct>, idProfile: number) {
    const list2 = [];
    list.forEach(function (currentValue, index, arr) {
      if (list[index].checked === true) {
        list[index].idProfile = idProfile
        list[index].idFunctionality = list[index].systemFunctionality.idFunctionality
        list2.push(list[index]);
      }
    })
    return list2;
  }

  /* createNodeTree() {
     const node: SystemProfileFunct = new SystemProfileFunct();
     node.checked = false;
     let optionValue = new Directory('optionValue', [], [], node);
     let option = new Directory('Option', [optionValue], [], node);
     let setting = new Directory('Setting', [option], [], node);
     let ch = new Directory('Historia Clinica', [], [], node);
     this.dto.directories = [setting, ch];
   }*/


  async createNodeTree() {
    this.dto.directories = [];
    console.log(this.dto.listSection)
    this.dto.listSection.map((item: SystemSection) => {
      let node = new Directory(item.nameSection, [], [], item, false);
      this.dto.directories.push(node)
    });
    console.log(this.dto.listProfileFunc)
    /*  this.dto.directories.map((sec: SystemSection) => {  
      this.dto.listProfileFunc.map((item: SystemProfileFunct) => {
        if(item.systemFunctionality.sysIdFunctionality==undefined && sec.idSection==item.systemFunctionality.idSection){
        let node = new Directory(item.systemFunctionality.nameFunctionality, [], [], item);
        this.dto.directories.push(node)
      }
      }
    )
  })*/

    /*const node: SystemProfileFunct = new SystemProfileFunct();
    node.checked = false;
    let optionValue = new Directory('optionValue', [], [], node);
    let option = new Directory('Option', [optionValue], [], node);
    let setting = new Directory('Setting', [option], [], node);
    let ch = new Directory('Historia Clinica', [], [], node);
    this.dto.directories = [setting, ch];*/
  }

  saveTreeProfileFunctionality() {
    this.dto.listProfFunc = new Array<any>();
    this.checkRecursive(this.dto.directories)
    console.log('---lista insertar---')
    console.log(this.dto.listProfFunc)
    this.saveProfileFunc(this.dto.listProfFunc);
  }

  checkRecursive(directories) {
    directories.forEach(d => {
      d.data.checked = d.checked;
      if (d.data.checked == true) {
        this.dto.listProfFunc.push(d.data)
      }
      this.checkRecursive(d.directories)
    })

  }


  getTreeNode(id: number) {
    this.service.getTreeViewProfileFunc(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            this.dto.directories = resp.data;
            console.log(this.dto.directories)
          } else {
            console.log('Lista vacia de Option');
          }
        }, error => {
          alert(error);
          console.log(error);
        });

  }

  saveProfileFunc(rs: Array<SystemProfileFunct>) {
    const idProfile: number = +this.activatedRoute.snapshot.params.id;
    var list = this.listChecked(rs, idProfile);

    this.service.save(list, idProfile).subscribe(
      (data: JSendResponse) => {
        if (data.status === Constants.SUCCESS) {
          this.router.navigate(['abaton/user/profile']);
        } else {
          alert('Error al agregar');
        }
      },
      error => console.log('entra al  error', error)
    );
  }

  updateOptionValue(item: SystemProfileFunct) {
    localStorage.setItem('profileFunc', JSON.stringify(item));
    this.router.navigate([`abaton/profile/view/${item.idProfile}/profileFunc/${item.idProfFunc}`]);
  }

  deleteOptionValue(id: number) {
    this.service.delete(id)
      .subscribe(
        (resp: JSendResponse) => {
          if (resp.status === Constants.SUCCESS) {
            const params = this.activatedRoute.snapshot.params;
            if (params.id) {
              this.listProfileFunc(params.id);
            }
          } else {
            console.log('delete: Lista vacia de Option');
          }
        });
  }

  backToProfile() {
    this.dto.listProfileFunc = [];
    this.dto.profile = new SystemProfile();
    this.router.navigate([`abaton/user/profile`]);
  }


}
