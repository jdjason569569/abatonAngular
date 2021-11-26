import {SystemInstitutionModel} from './SystemInstitution.model';

export class SystemUser {
   idUser?: number;
   idSpeciality?: number;
   nameUser?: string;
   lastNameUser?: string;
   identUser?: string;
   passUser?: string;
   emailUser?: string;
   activeUser?: boolean;
   configProfileUser?: string;
   idProfile?: number;
   phoneUser?: string;
   token?: string;
   lstInstitutions?: SystemInstitutionModel[];
}
