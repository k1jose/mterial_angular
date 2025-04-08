import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-menu',
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  template: `
  <div class="sidenav-container">
    <div class="sidenav-header">
      <img src="images.png" alt="" [width]="profilePicSize()">
      <div class="header-text" [class.hide-header-text]="sideNavCollpsed()">
        <h2>Bienvenido a senati</h2>
      </div>
    </div>
    <mat-nav-list class="menu-container">
      @for (item of menuItems(); track $index) {
        <a class="menu-item">
          <mat-list-item routerLinkActive="selected-menu-item" 
            #rla="routerLinkActive" routerLink={{item.route}}
            [activated]="rla.isActive" >
            <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
            @if (!sideNavCollpsed()) {
              <span matListItemTitle class="menu-text">{{item.label}}</span>
            }
          </mat-list-item>
        </a>
      }
    </mat-nav-list>
  </div>
  `,
  styles: `
  :host {
    transition: all 500ms ease-in-out;
  }
  .sidenav-container {
    background: linear-gradient(to bottom, #011FA4, #0426E8, #011FA4);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .sidenav-header {
    padding-top: 24px;
    text-align: center;
    color: white;
  }
  .sidenav-header > img {
    border-radius: 50%;
    object-fit: cover;
  }
  .header-text > h2 {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .hide-header-text {
    opacity: 0;
    height: 0px !important;
  }
  .menu-container {
    background: linear-gradient(to bottom, #011FA4, #0426E8, #011FA4);
    padding: 0;
    flex-grow: 1;
  }
  .menu-item {
    color: white !important;
  }
  .menu-text {
    color: white !important;
  }
  mat-icon {
    color: white !important;
  }
  .selected-menu-item {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }
  `
})
export class MenuComponent {

  sideNavCollpsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollpsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Estudiantes', route: 'dashboard' },
    { icon: 'dashboard', label: 'Periodo', route: 'products' },
   /*  { icon: 'headset', label: 'Accesorios', route: 'accesorios' }, */
    { icon: 'category', label: 'Carreras', route: 'categorias' },
    { icon: 'contact_mail', label: 'Contacto', route: 'contacto' },
    { icon: 'logout', label: 'Salir', route: 'ubicacion' },
  ]);

  profilePicSize = computed(() => this.sideNavCollpsed() ? '32' : '100');
}
