import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CursosComponent,
        CursoDetalheComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
