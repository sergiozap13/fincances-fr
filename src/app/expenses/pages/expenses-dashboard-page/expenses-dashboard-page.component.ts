import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { ExpensesService } from '../../services/expenses.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Expense } from '../../interfaces/expense';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

@Component({
  selector: 'app-expenses-dashboard-page',
  standalone: false,
  templateUrl: './expenses-dashboard-page.component.html',
  styleUrl: './expenses-dashboard-page.component.css'
})
export class ExpensesDashboardPageComponent implements OnInit {

  public actualMonth: string = MONTHS[new Date().getMonth()];
  public actualMonthNumber: number = new Date().getMonth() + 1;
  public expenses: Expense[] = [];
  public totalMonthExpenses: number = 0;
  public isLoading: boolean = false;
  public errorMessage: string | null = null;
  public previousMonths: string[] = this.getPreviousMonths();

  private destroyRef = inject(DestroyRef);

  constructor(
    private expensesService: ExpensesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.expensesService.getAllMonthExpenses(this.actualMonthNumber, this.authService.getUserId())
      .pipe(
        tap(expenses => {
          this.expenses = expenses;
          this.totalMonthExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
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

  private getPreviousMonths(): string[] {
    const currentIndex = new Date().getMonth();
    return Array.from({ length: 4 }, (_, i) => {
      const idx = (currentIndex - 1 - i + 12) % 12;
      return MONTHS[idx];
    });
  }

}
