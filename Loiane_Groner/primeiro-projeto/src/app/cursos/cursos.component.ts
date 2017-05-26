import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();
  }

}
