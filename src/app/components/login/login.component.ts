import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-title>Iniciar Sesión</mat-card-title>
        <form [formGroup]="loginForm" (ngSubmit)="login()">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Usuario</mat-label>
            <input matInput formControlName="username" type="text">
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contraseña</mat-label>
            <input matInput formControlName="password" type="password">
          </mat-form-field>
          <button mat-raised-button color="primary" type="submit" class="full-width" [disabled]="!loginForm.valid">
            Ingresar
          </button>
          <p class="error-message" *ngIf="errorMessage">{{ errorMessage }}</p>
        </form>
      </mat-card>
    </div>
  `,
  styles: [
    `
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #003366, #0066cc);
    }
    .login-card {
      padding: 30px;
      width: 400px;
      text-align: center;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
    .full-width {
      width: 100%;
    }
    .error-message {
      color: red;
      margin-top: 10px;
    }
    `
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/admin']);
    } else if (username === 'estudiante' && password === '1234') {
      this.router.navigate(['/estudiante']);
    } else if (username === 'docente' && password === '5678') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
