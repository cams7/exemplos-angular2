import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalheComponent } from './curso-detalhe.component';

describe('Detalhe do curso', () => {
  let component: CursoDetalheComponent;
  let fixture: ComponentFixture<CursoDetalheComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve verificar se o paragrafo foi definido corretamente', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Detalhes do curso');
  });
});
