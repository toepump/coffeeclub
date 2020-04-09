import { CoffeeListComponent } from './coffee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const coffeeListRoutes: Routes = [
    {
        path: '',
        component: CoffeeListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(coffeeListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoffeeListRoutingModule { }
