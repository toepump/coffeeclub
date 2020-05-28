import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService
  ) { 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.form.valueChanges.pipe(
      debounceTime(400)
    ).subscribe(() => console.log(this.form) );
  }


  ngOnInit(): void {}

  signup() {
    const { email, password } = this.form.value;
    this.authService.signup(email, password);
    this.form.reset();
    this.message = 'A verification email has been sent to your email address. Please click the link to verify.';
  }

  login() {
    const { email, password } = this.form.value;
    this.authService.login(email, password).then(() => {
      this.router.navigate(['/coffee-list', {}]);
      this.form.reset();
      this.message = '';
    });
  }

  logout() {
    this.authService.logout();
  }

}
