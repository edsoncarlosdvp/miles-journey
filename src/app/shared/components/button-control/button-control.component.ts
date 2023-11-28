import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss']
})
export class ButtonControlComponent {
  @Input() operation: 'increment' | 'decrement' = "increment";
  @Input() src: string = '';
  @Input() alt: string = '';

  increment(value: number) {
    return value++;
  }

  decrement(value: number) {
    return value--;
  }
}
