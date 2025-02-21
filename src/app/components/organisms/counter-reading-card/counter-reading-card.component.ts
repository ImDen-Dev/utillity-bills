import { Component } from '@angular/core';
import { MatChip, MatChipSet } from '@angular/material/chips';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-counter-reading-card',
  imports: [
    MatChipSet,
    MatCardFooter,
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatChip,
  ],
  templateUrl: './counter-reading-card.component.html',
  styleUrl: './counter-reading-card.component.scss',
})
export class CounterReadingCardComponent {}
