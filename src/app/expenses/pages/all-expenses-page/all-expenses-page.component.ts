import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ExpensesService } from '../../services/expenses.service';
import { Expense } from '../../interfaces/expense';

@Component({
  selector: 'app-all-expenses-page',
  standalone: false,
  templateUrl: './all-expenses-page.component.html',
  styleUrl: './all-expenses-page.component.css'
})
export class AllExpensesPageComponent implements OnInit {

  public expenses: Expense[] = [];
  public isLoading: boolean = false;
  public errorMessage: string | null = null;

  private destroyRef = inject(DestroyRef);

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.expensesService.getAllExpenses()
      .pipe(
        tap(expenses => {
          this.expenses = expenses;
          this.isLoading = false;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        error: () => {
          this.errorMessage = 'No se pudieron cargar los gastos. Inténtalo de nuevo.';
          this.isLoading = false;
        }
      });
  }

}
