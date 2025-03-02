import { Component, Input } from '@angular/core';
import { Expense } from '../../interfaces/expense';

@Component({
  selector: 'expenses-list',
  standalone: false,
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.css'
})
export class ExpensesListComponent {

  @Input()
  public expenses: Expense[] = [];

}
