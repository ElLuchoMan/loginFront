import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home.component';
import { DetalleProductoComponent } from './Components/Producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './Components/Producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './Components/Producto/listar-producto/listar-producto.component';
import { NuevoProductoComponent } from './Components/Producto/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { interceptorProvider } from './Services/producto-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    HomeComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
