import { Component } from '@angular/core';
import { CounterReadingCardComponent } from '../../components/organisms/counter-reading-card/counter-reading-card.component';

@Component({
  selector: 'app-home',
  imports: [CounterReadingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
