import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from '../models/trabajo';

@Component({
  selector: 'app-empleos-detalles',
  templateUrl: './empleos-detalles.component.html',
  styleUrls: ['./empleos-detalles.component.scss']
})
export class EmpleosDetallesComponent implements OnInit {

  @Input() jobDetail:Trabajo;

  constructor() { }

  ngOnInit(): void {
  }

}
