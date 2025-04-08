import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from "./components/menu/menu.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MenuComponent
  ],
  template: `
    <mat-toolbar class="navbar">
      <button mat-icon-button (click)="colapsado.set(!colapsado())">
        <mat-icon>menu</mat-icon>
      </button>

      <div class="search-container">
        <mat-icon class="search-icon">search</mat-icon>
        <input matInput placeholder="Search" class="search-input">
      </div>

      <span class="espaciador"></span>

      <button mat-icon-button>
        <mat-icon>notifications</mat-icon>
      </button>

      <button mat-icon-button>
        <mat-icon>mail</mat-icon>
      </button>

      <div class="user-info">
        <img src="icon-usuario.png" class="imagen-perfil">
        <div class="user-text">
          <span class="nombre-usuario">Jhonatan Sauñe Pichardo</span>
          <span class="user-role">Docente</span>
        </div>
      </div>

      <button mat-icon-button (click)="modoOscuro.set(!modoOscuro())">
        <mat-icon>{{ modoOscuro() ? 'dark_mode' : 'light_mode' }}</mat-icon>
      </button>
    </mat-toolbar>

    <mat-sidenav-container>
      <mat-sidenav [opened]="true" mode="side" [style.width]="anchoBarraLateral()">
        <app-menu [collapsed]="colapsado()" />
      </mat-sidenav>

      <mat-sidenav-content class="contenido" [style.margin-left]="anchoBarraLateral()">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: `
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #021B79;
      color: white;
      padding: 0 16px;
      height: 64px;
    }

    .search-container {
      display: flex;
      align-items: center;
      background: #333;
      padding: 5px 10px;
      border-radius: 5px;
      margin-left: 20px;
    }

    .search-icon {
      color: #bbb;
      margin-right: 5px;
    }

    .search-input {
      background: transparent;
      border: none;
      outline: none;
      color: white;
    }

    .espaciador {
      flex-grow: 1;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: 10px;
    }

    .user-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .nombre-usuario {
      font-size: 14px;
      font-weight: bold;
    }

    .user-role {
      font-size: 12px;
      color: #42a5f5;
    }

    .imagen-perfil {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }

    .contenido {
      padding: 24px;
    }

    mat-sidenav-container {
      height: calc(100vh - 64px);
    }

    mat-sidenav {
      border-radius: 0;
    }
  `
})
export class AppComponent {
  colapsado = signal(false);
  anchoBarraLateral = computed(() => this.colapsado() ? '65px' : '250px');
  modoOscuro = signal(false);

  private _documento = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this._documento.body.classList.toggle('dark', this.modoOscuro());
    });
  }
}
