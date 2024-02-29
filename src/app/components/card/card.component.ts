import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Irock } from '../../interfaces/irock';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input () rockCard! : Irock
}
