import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from '../models/trabajo';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.component.html',
  styleUrls: ['./lista-empleos.component.scss']
})
export class ListaEmpleosComponent implements OnInit {

  jobDetail:Trabajo;
  
  public trabajos:Array<Trabajo>;

  constructor() {
    this.trabajos=Empleos
  }

  ngOnInit(): void {
    this.jobDetail=Empleos[0];
  }

  getElement(element:Trabajo){
    this.jobDetail=element;
  }
}

const Empleos: Trabajo []=[
  {nombre: 'Pintar',fecha: '2020-11-26',hora: 14,n_de_horas: 2,precio: 85,contratista_id: 1},
  {nombre: 'Barrer',fecha: '2020-11-26',hora: 14,n_de_horas: 2,precio: 85,contratista_id: 1},
  {nombre: 'Cortar Cesped',fecha: '2020-11-26',hora: 14,n_de_horas: 2,precio: 85,contratista_id: 1},
  {nombre: 'Lavar Coches',fecha: '2020-11-26',hora: 14,n_de_horas: 2,precio: 85,contratista_id: 1},
  {nombre: 'Desponchar Bici',fecha: '2020-11-26',hora: 14,n_de_horas: 2,precio: 85,contratista_id: 1}
]