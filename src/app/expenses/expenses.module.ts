import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MonthPageComponent } from './pages/month-page/month-page.component';
import { AllExpensesPageComponent } from './pages/all-expenses-page/all-expenses-page.component';
import { AddExpensesPageComponent } from './pages/add-expenses-page/add-expenses-page.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { RouterModule } from '@angular/router';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ExpensesDashboardPageComponent } from './pages/expenses-dashboard-page/expenses-dashboard-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    MonthPageComponent,
    AllExpensesPageComponent,
    AddExpensesPageComponent,
    ExpensesListComponent,
    ExpensesDashboardPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
