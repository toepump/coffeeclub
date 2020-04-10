import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee.model';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  coffees: Coffee[];
  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe(data => {
      this.coffees = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Coffee;
      });
    });
  }

  create(coffee: Coffee){
    this.coffeeService.createCoffee(coffee);
  }

  update(coffee: Coffee) {
    this.coffeeService.updateCoffee(coffee);
  }

  delete(id: string) {
    this.coffeeService.deleteCoffee(id);
  }

}
