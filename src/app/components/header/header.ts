import { Component, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  totalItems$!: Observable<number>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.totalItems$ = this.carritoService.totalItems$;
  }
}