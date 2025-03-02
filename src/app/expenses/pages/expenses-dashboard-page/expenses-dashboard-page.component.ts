import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { Expense } from '../../interfaces/expense';
import { of, switchMap } from 'rxjs';

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

@Component({
  selector: 'app-expenses-dashboard-page',
  standalone: false,
  templateUrl: './expenses-dashboard-page.component.html',
  styleUrl: './expenses-dashboard-page.component.css'
})
export class ExpensesDashboardPageComponent implements OnInit{

  public actualMonth: string = meses[ new Date().getMonth() ];
  public actualMonthNumber: number = meses.indexOf(this.actualMonth) + 1;
  public expenses: Expense[] = []
  public totalMonthExpenses: number = 0;

  constructor( private gastosService: ExpensesService ) {}

  ngOnInit(): void {
    // inicializamos el componente haciendo una llamada a la BD para obtener todos los gastos
    this.gastosService.getAllMonthExpenses( this.actualMonthNumber, '215fe7fd-6adc-4e12-b2b2-14aea7bc7050', )
      .pipe(
        switchMap( gastos => {
          this.expenses = gastos;
          return of(this.getExpensesSum());
        })
    ).subscribe( () => console.log('Gastos del mes actual cargados') );
  }

  getExpensesSum(): void{
    this.expenses.forEach( gasto => {
      this.totalMonthExpenses += gasto.cantidad;
    } )
  }



}
