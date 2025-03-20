import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  standalone: false,
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  result:number = 0;

  claculate():void{
    const input1 = document.getElementById('in1') as HTMLInputElement;
    const input2 = document.getElementById('in2') as HTMLInputElement;

    const num1 = parseFloat(input1.value)|| 0;
    const num2 = parseFloat(input2.value)|| 0;

    this.result = num1+num2;
    console.log(this.result)
  }
}
