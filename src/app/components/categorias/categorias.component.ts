import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-categorias',
  standalone: true, // Necesario en Angular 15+ si el componente no está en un módulo global
  imports: [CommonModule, MatIconModule], // Asegura que MatIconModule esté importado
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  categorias = [
    {
      titulo: 'Ingenieria de software con IA',
      descripcion: 'Estudios de tecnologia y inteligencia articial',
      imagenUrl: 'https://png.pngtree.com/png-clipart/20240328/original/pngtree-artificial-intelligence-brain-graphic-element-png-image_14702509.png'
    },
    {
      titulo: 'Administración de empresas',
      descripcion: 'Estudio del mercado y la empresas en general',
      imagenUrl: 'https://camaradecomercioempresarial.org/wp-content/uploads/2022/05/curso-administracion-de-empresas-899x899.png'
    }
  ];
}
