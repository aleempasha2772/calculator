// calci.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calci',
  standalone: false,
  templateUrl: './calci.component.html',
  styleUrl: './calci.component.css'
})
export class CalciComponent {
  display: string = '0';

  appendToDisplay(value: string): void {
    if (this.display === '0' && value !== '.') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  clear(): void {
    this.display = '0';
  }
  calculate(): void {
    try {
      const expression = this.display;
      const tokens = expression.match(/(\d*\.?\d+|[+\-*/])/g); // Split into numbers and operators
      if (!tokens) throw new Error('Invalid expression');
  
      let result = parseFloat(tokens[0]);
      for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNum = parseFloat(tokens[i + 1]);
        switch (operator) {
          case '+': result += nextNum; break;
          case '-': result -= nextNum; break;
          case '*': result *= nextNum; break;
          case '/': 
            if (nextNum === 0) throw new Error('Division by zero');
            result /= nextNum; 
            break;
        }
      }
      this.display = result.toString();
    } catch (error) {
      this.display = 'Error';
      setTimeout(() => this.clear(), 1000);
    }
  }

 
}