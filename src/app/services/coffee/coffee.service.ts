import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Coffee } from 'src/app/models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private firestore: AngularFirestore) { }

  getCoffees() {
    return this.firestore.collection('coffees').snapshotChanges();
  }

  createCoffee(coffee: Coffee){
    return this.firestore.collection('coffee').add(coffee);
  }

  updateCoffee(coffee: Coffee){
    delete coffee.id;
    this.firestore.doc('coffees/' + coffee.id).update(coffee);
  }

  deleteCoffee(coffeeId: string){
    this.firestore.doc('coffees/' + coffeeId).delete();
}
}
