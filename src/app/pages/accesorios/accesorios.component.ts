import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.scss'
})
export class AccesoriosComponent {
  brands = [
    { name: 'Sony', imageUrl: 'assets/brands/sony.png' },
    { name: 'Google', imageUrl: 'assets/brands/google.png' },
    { name: 'Apple', imageUrl: 'assets/brands/apple.png' },
    { name: 'Toshiba', imageUrl: 'assets/brands/toshiba.png' },
    { name: 'Bassx', imageUrl: 'assets/brands/bassx.png' },
    { name: 'Konika', imageUrl: 'assets/brands/konika.png' },
    { name: 'Apple', imageUrl: 'assets/brands/apple.png' },
    { name: 'Toshiba', imageUrl: 'assets/brands/toshiba.png' }
  ];

  products = [
    {
      name: '4K TV Game Mini Arcade',
      description: 'Rocker Console 32GB/64GB',
      price: 29.80,
      imageUrl: 'assets/products/game-arcade.png',
      discount: 0
    },
    {
      name: 'Cancelling Headset Music',
      description: 'Sport Deep Bass',
      price: 39.80,
      imageUrl: 'assets/products/headset.png',
      discount: 0
    },
    {
      name: 'T500BT Original Wireless',
      description: 'Bluetooth Headphone',
      price: 69.80,
      imageUrl: 'assets/products/t500bt.png',
      discount: 15
    },
    {
      name: 'Black Walnut Wood & Aluminum',
      description: 'Headphone Stand',
      price: 70.80,
      imageUrl: 'assets/products/headphone-stand.png',
      discount: 20
    },
    {
      name: 'Beats Studio3 Wireless',
      description: 'Bluetooth Headphones',
      price: 29.80,
      imageUrl: 'assets/products/beats-studio3.png',
      discount: 10
    },
    {
      name: 'Marshall MAJOR III Wireless',
      description: 'Folding Bluetooth',
      price: 39.80,
      imageUrl: 'assets/products/marshall-major-iii.png',
      discount: 25
    },
    {
      name: 'T500BT Original Wireless',
      description: 'Bluetooth Headphone',
      price: 69.80,
      imageUrl: 'assets/products/t500bt.png',
      discount: 0
    },
    {
      name: 'Black Walnut Wood & Aluminum',
      description: 'Headphone Stand',
      price: 70.80,
      imageUrl: 'assets/products/headphone-stand.png',
      discount: 0
    }
  ];

  colors = []; // No hay colores en la imagen

  changeImage(product: any, color: string) {
    // No hay cambio de imagen por color en la imagen
  }
}