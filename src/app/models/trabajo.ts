import { competencia } from './competencia';
import { contratista } from './contratista';
import { tarea } from './tarea';

export interface Trabajo{
  nombre: string
  fecha: string
  hora: number
  n_de_horas: number
  precio: number

  contratista_id?: number
  contratista?:contratista

  tarea_id?: number
  tareas?:Array<tarea>

  competencia_id?: number
  competencias?:Array<competencia>
}
  