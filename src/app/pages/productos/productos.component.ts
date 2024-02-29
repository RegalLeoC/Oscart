import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RocasService } from '../../rocas.service';
import { Irock } from '../../interfaces/irock';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  rockList : Irock[] = []
  rocasService : RocasService = inject(RocasService)

  constructor()
  {
    this.rockList = this.rocasService.getRockList()
  }

}
