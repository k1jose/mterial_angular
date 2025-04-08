import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-periods',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule // Importante para usar formGroup
  ],
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent {
  careers = [
    { name: 'Ingeniería de Software', id: 1 },
    { name: 'Ingeniería Industrial', id: 2 },
    { name: 'Medicina', id: 3 },
    { name: 'Derecho', id: 4 }
  ];

  periods = [
    { name: '2024-10', id: 1 },
    { name: '2024-20', id: 2 },
    { name: '2025-10', id: 3 },
    { name: '2025-10', id: 4 }
  ];

  periodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.periodForm = this.fb.group({
      career: ['', Validators.required], 
      period: ['', Validators.required] 
    });
  }

  onSubmit() {
    if (this.periodForm.valid) {
      console.log('Formulario enviado', this.periodForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
