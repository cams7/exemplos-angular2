import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { MeuFormComponent } from '../meu-form/meu-form.component';
import { CursoComponent } from '../curso/curso.component';
import { ContadorComponent } from '../contador/contador.component';

describe('Teste DataBinding', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DataBindingComponent,
        MeuFormComponent,
        CursoComponent,
        ContadorComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
