import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeListRoutingModule } from './coffee-list-routing.module';

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [
    CommonModule,
    CoffeeListRoutingModule
  ]
})
export class CoffeeListModule { }
