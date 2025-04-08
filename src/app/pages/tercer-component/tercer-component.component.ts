import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-tercer-component',
  imports: [],
  templateUrl: './tercer-component.component.html',
  styleUrl: './tercer-component.component.scss'
})
export class TercerComponentComponent {
   variable1 = "hola";

   aroon:Producto[]=[
    {id:1, title:"juanita"},
    {id:2, title:"Rosita"},
    {id:3, title:"jesusa"},
    {id:4, title:"nicoll"}
   ]
}
