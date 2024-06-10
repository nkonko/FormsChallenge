import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})

export class CustomInputComponent {
  @Input() label!: string;
  @Input() type!: string;
  @Input() inputName!: string;
  @Input() value!: any;
  @Input() required!: boolean;
  @Input() errorMessage!: string;

}
