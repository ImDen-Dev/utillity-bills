import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter-reading-card',
  imports: [FormsModule],
  templateUrl: './counter-reading-card.component.html',
  styleUrl: './counter-reading-card.component.scss',
})
export class CounterReadingCardComponent {
  cardTitle = input('Водоканал');
  previousIndicators = input('15651');
  currentIndicators = model('13546');
}
