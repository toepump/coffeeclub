import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, ObjectUnsubscribedError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router , public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  async sendEmailVerification() {
    await this.firebaseAuth.currentUser.then(u => {u.sendEmailVerification(); });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.sendEmailVerification();
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        this.isUserLoggedIn.next(true);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/home', {}]);
  }
}
