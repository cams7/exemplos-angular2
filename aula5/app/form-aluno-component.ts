import {Component} from 'angular2/core';
import {Curso} from './models/curso';
import {Aluno} from './models/aluno';

@Component({
	selector: 'form-aluno',
	templateUrl: 'app/views/formulario.html'
})
export class FormAlunoComponent{
	sucesso: boolean = false;
	cursos: Curso[];
	aluno: Aluno;

	constructor() {
		this.aluno = new Aluno();
		this.cursos = [
			new Curso('engmec', 'Engenharia Mecânica'),
			new Curso('tads', 'Análise e Desenvolvimento de Sistemas')
		];
	}

	enviar(): void {
		this.sucesso = true;
	}

	debug(): string {
		var jsonAluno:string = JSON.stringify(this.aluno);
		return jsonAluno;
	}

}
