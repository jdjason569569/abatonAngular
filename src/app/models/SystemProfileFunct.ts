import { SystemFunctionality } from './SystemFunctionality';

export class SystemProfileFunct {
  idProfFunc?: number;
  idProfile?: number;
  idFunctionality?: number;
  systemFunctionality?: SystemFunctionality;
  checked?: boolean;
  check() {
    console.log('cambio de estado', this.checked)
    const newState = !this.checked;
    this.checked = newState;
  }
}
