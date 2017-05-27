import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

describe('Lista de cursos', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CursosComponent,
        CursoDetalheComponent
      ],
      providers: [
        CursosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve verificar se o título foi definido corretamente', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;

    expect(el.textContent).toContain('http://loiane.training');
  });
});
