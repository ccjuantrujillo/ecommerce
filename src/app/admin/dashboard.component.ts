import { Component, ViewEncapsulation } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CategoryComponent } from './views/category/category.component';
import { OrderComponent } from './views/order/order.component';
import { ConfigComponent } from './views/config/config.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './views/customer/customer.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    OrderComponent,
    ConfigComponent,
    SidebarComponent,
    HeaderComponent,
    CommonModule,
    CustomerComponent
  ],
  template: `
    <div class="container-fluid">
      <div class="row">

        <!-- Sidebar -->
        <app-sidebar 
            class="col-md-3 col-lg-2 px-0"
            [opcion]="opcion"
            (notificarAlPadre)="showSection($event)"
          ></app-sidebar>

        <!-- Main Content -->
        <div class="col-md-9 col-lg-10">
            <div class="p-4">

              <!-- Header Component-->
              <app-header></app-header>
              
              <!-- Dashboard Section -->
              <app-home *ngIf="opcion === 'dashboard'"></app-home>

              <!-- Products Section -->
              <app-product *ngIf="opcion === 'products'"></app-product>

              <!-- Categories Section -->
              <app-category *ngIf="opcion === 'categories'"></app-category>

              <!--Orders Section -->
              <app-order *ngIf="opcion === 'orders'"></app-order>

              <!--Config Section -->
              <app-config *ngIf="opcion === 'settings'"></app-config>

              <!--Customer Section -->
              <app-customer *ngIf="opcion === 'customers'"></app-customer>

            </div>

        </div>

      </div>
      
    </div>
  `,
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class DashboardComponent {
  title = 'Solo Admin';
  opcion = 'dashboard';

  showSection(evento: string) {
    this.opcion = evento;
    console.log(evento);
  }
}
