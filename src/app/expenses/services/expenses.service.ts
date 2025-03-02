

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../interfaces/expense';

const baseUrl = 'http://localhost:8080/api/gastos';

@Injectable({providedIn: 'root'})
export class ExpensesService {

  constructor( private http: HttpClient ) {  }

  // obtiene todos los gastos de la bd
  public getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(baseUrl);
  }

  // obtener todos los gastos de un mes
  public getAllMonthExpenses(month: number, user: string): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${baseUrl}/usuario/${user}/m/${month}`);
  }

}
