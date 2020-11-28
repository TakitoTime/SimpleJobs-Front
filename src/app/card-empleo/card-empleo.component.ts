import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Trabajo } from '../models/trabajo';

@Component({
  selector: 'app-card-empleo',
  templateUrl: './card-empleo.component.html',
  styleUrls: ['./card-empleo.component.scss']
})
export class CardEmpleoComponent implements OnInit {

  @Input() trabajo: Trabajo;
  @Output() detail = new EventEmitter<Trabajo>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  enviarTrabajoDetalles(element: any){
    this.detail.emit(element);
  }

}
