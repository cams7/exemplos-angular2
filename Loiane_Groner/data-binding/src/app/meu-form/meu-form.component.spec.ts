import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MeuFormComponent } from './meu-form.component';

describe('Meu formulaŕio', () => {
  let component: MeuFormComponent;
  let fixture: ComponentFixture<MeuFormComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuFormComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const testeNome =  (id: string) => {
    fixture.detectChanges();
    tick();

    const nome = fixture.debugElement.query(By.css('#' + id)).nativeElement;
    nome.value = id;
    nome.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Você digitou: ' + id);
  };

  it('should be created', fakeAsync(() => {
    expect(component).toBeTruthy();

    testeNome('nome1');
    testeNome('nome2');
    testeNome('nome3');
    testeNome('nome4');
  }));

});
