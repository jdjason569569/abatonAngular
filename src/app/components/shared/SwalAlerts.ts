import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalAlerts {

  loadingSwal(textStr: string) {
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      customClass: {
        container: 'my-swal'
      },
      text: textStr
    });
    Swal.showLoading();
  }

  errorSwal(textStr: string) {
    Swal.fire({
      allowOutsideClick: false,
      type: 'error',
      customClass: {
        container: 'my-swal'
      },
      text: textStr
    });
  }

  errorTopRigth(text: string) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      customClass: {
        container: 'my-swal'
      },
      timer: 4000
    }).fire({
      type: 'error',
      title: text
    });
  }

  successTopRigth(text: string) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      customClass: {
        container: 'my-swal'
      },
      timer: 4000
    }).fire({
      type: 'success',
      title: text
    });
  }
}
