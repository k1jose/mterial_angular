import { Routes } from '@angular/router';
import { PeriodsComponent } from './pages/periods/periods.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import {AccesoriosComponent}from './pages/accesorios/accesorios.component';
import {CategoriasComponent} from './components/categorias/categorias.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {UbicacionComponent} from './components/ubicacion/ubicacion.component';


export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dahsboard'
  },
  {
    path:'dashboard',
    component:EstudiantesComponent
    
  },
  {
    path:'products',
    component:PeriodsComponent
    
  },
  {
    path:'accesorios',
    component:AccesoriosComponent
    
  },
  {
    path:'categorias',
    component:CategoriasComponent
    
  },
  {
    path:'contacto',
    component:ContactoComponent
    
  },
  {
    path:'ubicacion',
    component:UbicacionComponent
    
  },
  
  
];
