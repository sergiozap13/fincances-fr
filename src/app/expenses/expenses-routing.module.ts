

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MonthPageComponent } from './pages/month-page/month-page.component';
import { AllExpensesPageComponent } from './pages/all-expenses-page/all-expenses-page.component';
import { AddExpensesPageComponent } from './pages/add-expenses-page/add-expenses-page.component';
import { ExpensesDashboardPageComponent } from './pages/expenses-dashboard-page/expenses-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
          path: 'dashboard',
          component: ExpensesDashboardPageComponent
      },
      {
        path: 'add',
        component: AddExpensesPageComponent
      },
      {
        path: 'month',
        component: MonthPageComponent,
        children: [
          {
            path: 'all-expenses',
            component: AllExpensesPageComponent
          },
        ]
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
})
export class ExpensesRoutingModule { }
