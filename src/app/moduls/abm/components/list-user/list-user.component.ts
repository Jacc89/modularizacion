import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement, ELEMENT_DATA } from '../../models/periodic-element';
import { MatSort } from '@angular/material/sort';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../models/user.Model';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {


  displayedColumns: string[] = ['Nombre', 'Apellido', 'Telefono','Correo', 'FechaIngreso', 'EstadoCivil', 'Sexo', 'Acciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true})  paginado!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort |any;
  listUser: IUser[] = [];

   
  constructor( private userService: UsersService) { }

  ngOnInit(): void {
    this.cargarUser();
    this.dataSource.paginator = this.paginado;
    this.dataSource.sort = this.sort;
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   cargarUser(){
    this.listUser = this.userService.getUser();
    // this.dataSource = new MatTableDataSource(this.listUser);

    console.log(this.listUser);
   }


}
