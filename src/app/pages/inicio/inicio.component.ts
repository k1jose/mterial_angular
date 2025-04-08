import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit, OnDestroy {
  imagenes: string[] = [
    'ofertas/ofeta_ejemplo.png',
    'ofertas/iphone_13.webp',
    ''
  ];
  indiceImagenActual: number = 0;
  intervalo: any;

  ngOnInit() {
    this.iniciarCambioAutomatico();
  }

  ngOnDestroy() {
    this.detenerCambioAutomatico();
  }

  iniciarCambioAutomatico() {
    this.intervalo = setInterval(() => {
      this.indiceImagenActual = (this.indiceImagenActual + 1) % this.imagenes.length;
    }, 5000); // 5000 milisegundos = 5 segundos
  }

  detenerCambioAutomatico() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}