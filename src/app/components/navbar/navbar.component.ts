import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items = [
    {
      label: 'Inicio',
      routerLink: '/'
    },
    {
      label: 'Productos',
      routerLink: '/productos'
    },
    {
      label: 'Contacto',
      routerLink: '/contacto'
    },
    {
      label: 'Sobre Nosotros',
      routerLink: 'sobre-nosotros'
    }
  ]
}
