import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  message: string;
  title = 'Login';

  constructor(
    public authService: AuthService
  ) { }


  ngOnInit(): void {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    this.message = 'A verification email has been sent to your email address. Please click the link to verify.';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    this.message = '';
  }

  logout() {
    this.authService.logout();
  }

}
