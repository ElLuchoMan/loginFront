import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto.interface';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe(data => {
      this.producto = data;
    },
      err => {
        this.router.navigate(['']);
      }
    );
  }

  volver(): void {
    window.history.back();
  }
}
