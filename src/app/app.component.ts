import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffeeclub';
  isloggedIn: boolean = false;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe((loggedIn: boolean) => {
      this.isloggedIn = loggedIn;
    });
  }
}

