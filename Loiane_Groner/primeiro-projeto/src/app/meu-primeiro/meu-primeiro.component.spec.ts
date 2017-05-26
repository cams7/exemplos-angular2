import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponent } from './meu-primeiro.component';

describe('Meu primeiro componente', () => {
  let component: MeuPrimeiroComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve verificar se o paragrafo foi definido corretamente', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Meu primeiro componente');
  });
});
