import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Trabajo } from '../models/trabajo';

@Component({
  selector: 'app-card-empleo',
  templateUrl: './card-empleo.component.html',
  styleUrls: ['./card-empleo.component.scss']
})
export class CardEmpleoComponent implements OnInit {

  @Input() trabajo: Trabajo;

  constructor() { 
  }

  ngOnInit(): void {
  }

  enviarTrabajoDetalles(element: Trabajo){
  }

}
