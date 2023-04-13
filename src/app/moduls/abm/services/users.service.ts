import { Injectable } from '@angular/core';
import { IUser } from '../models/user.Model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  listUser: IUser[]= [
    { Nombre:'Luis',
      Apellido:'Castro',
      Telefono: 213213213123,
      Correo:'lu@gmail.com',
      FechaIngreso: new Date, 
      EstadoCivil:' Casado',
      Sexo:'Masculino',
  },
  { Nombre:'Luz',
      Apellido:'Clavijo',
      Telefono: 213213213123,
      Correo:'lc@gmail.com',
      FechaIngreso: new Date, 
      EstadoCivil:' Casada',
      Sexo:'Femenino',
  },
  { Nombre:'Alexandra',
      Apellido:'Castro',
      Telefono: 213213213123,
      Correo:'ale@gmail.com',
      FechaIngreso: new Date, 
      EstadoCivil:'Soltera',
      Sexo:'Femenina',
  }
  ]

  constructor() { }

  getUser(){
   return this.listUser.slice();
  }
}
