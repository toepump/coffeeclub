import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Coffee Club';
  isloggedIn: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

}
