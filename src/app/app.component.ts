import { Component } from '@angular/core';
import { MenuItem } from './shared/interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isSidebarActive: boolean = false;

  public readonly menuTags: MenuItem[] = [
    { label: 'mis gastos', route: 'expenses' },
    { label: 'añadir gasto', route: 'expenses/add' },
  ];

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

}
