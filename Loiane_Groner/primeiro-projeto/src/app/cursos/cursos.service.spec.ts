import { TestBed, inject } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('Suite de testes do serviço de cursos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CursosService
      ]
    });
  });

  it('Deve listar todos os cursos', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();

    let cursos = service.getCursos();
    expect(cursos.length).toEqual(3);

    const CURSOS: string[] = ['Java', 'Ext JS', 'Angular'];

    expect(cursos[0]).toEqual(CURSOS[0]);
    expect(cursos[1]).toEqual(CURSOS[1]);
    expect(cursos[2]).toEqual(CURSOS[2]);
  }));
});
