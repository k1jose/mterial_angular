import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';  // Necesario para formularios reactivos
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PeriodsComponent } from './periods.component';  // Cambié el nombre al de PeriodsComponent

describe('PeriodsComponent', () => {
  let component: PeriodsComponent;
  let fixture: ComponentFixture<PeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodsComponent],  // Correcto para declarar el componente PeriodsComponent
      imports: [
        ReactiveFormsModule,  // Necesario para formularios reactivos
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodsComponent);  // Creación de PeriodsComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se cree correctamente
  });
});
