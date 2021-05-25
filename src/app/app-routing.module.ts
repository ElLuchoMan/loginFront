import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DetalleProductoComponent } from './Components/Producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './Components/Producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './Components/Producto/listar-producto/listar-producto.component';
import { NuevoProductoComponent } from './Components/Producto/nuevo-producto/nuevo-producto.component';
import { Guard } from './Guards/guard.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: ListarProductoComponent },

  // productos: utilizamos canActivate
  {
    path: 'detalle/:id', component: DetalleProductoComponent,
    canActivate: [Guard], data: { expectedRol: ['admin', 'user'] }
  },
  {
    path: 'nuevo', component: NuevoProductoComponent,
    canActivate: [Guard], data: { expectedRol: ['admin'] }
  },
  {
    path: 'editar/:id', component: EditarProductoComponent,
    canActivate: [Guard], data: { expectedRol: ['admin'] }
  },

  // rutas a login y registro
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
