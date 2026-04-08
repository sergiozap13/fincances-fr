import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-add-expenses-page',
  standalone: false,
  templateUrl: './add-expenses-page.component.html',
  styleUrl: './add-expenses-page.component.css'
})
export class AddExpensesPageComponent {

  public expenseForm: FormGroup;
  public isSubmitting: boolean = false;
  public errorMessage: string | null = null;

  public categories: string[] = [
    'Alimentación', 'Transporte', 'Ocio', 'Salud', 'Hogar', 'Ropa', 'Tecnología', 'Otros'
  ];

  private destroyRef = inject(DestroyRef);

  constructor(
    private fb: FormBuilder,
    private expensesService: ExpensesService,
    private router: Router
  ) {
    this.expenseForm = this.fb.group({
      reason:    ['', [Validators.required, Validators.minLength(3)]],
      amount:    [null, [Validators.required, Validators.min(0.01)]],
      category:  ['', Validators.required],
      date:      [new Date().toISOString().substring(0, 10), Validators.required],
      necessary: [false],
      notes:     ['']
    });
  }

  onSubmit(): void {
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    this.expensesService.createExpense(this.expenseForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigate(['/expenses/dashboard']),
        error: () => {
          this.errorMessage = 'No se pudo guardar el gasto. Inténtalo de nuevo.';
          this.isSubmitting = false;
        }
      });
  }

  isInvalid(field: string): boolean {
    const control = this.expenseForm.get(field);
    return !!control && control.invalid && control.touched;
  }

}
