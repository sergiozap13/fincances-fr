
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Expense } from '../interfaces/expense';
import { environment } from '../../../environments/environment';

const baseUrl = `${environment.apiUrl}/gastos`;

@Injectable({ providedIn: 'root' })
export class ExpensesService {

  constructor(private http: HttpClient) {}

  public getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(baseUrl).pipe(
      catchError(err => throwError(() => err))
    );
  }

  public getAllMonthExpenses(month: number, userId: string): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${baseUrl}/usuario/${userId}/m/${month}`).pipe(
      catchError(err => throwError(() => err))
    );
  }

  public createExpense(expense: Omit<Expense, 'id'>): Observable<Expense> {
    return this.http.post<Expense>(baseUrl, expense).pipe(
      catchError(err => throwError(() => err))
    );
  }

}
