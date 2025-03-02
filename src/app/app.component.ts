import { Component } from '@angular/core';


interface MenuItem {
  label: string;
  route: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isSidebarActive: boolean = false;

  private menu_tags: MenuItem[] = [
    { label: 'mis gastos', route: 'expenses' },
    { label: 'añadir gasto', route: 'expenses/add' },
    { label: 'mis ahorros', route: 'savings' },
  ]

  get tags() : MenuItem[] {
    return [...this.menu_tags]
  }


  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

}
