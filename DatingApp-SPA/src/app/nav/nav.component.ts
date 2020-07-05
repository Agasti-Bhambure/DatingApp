import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('Logged in successfully');
      },
      (error) => {
        console.error('Login error');
      }
    );
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token; // if token then will return token else false
  }

  logout(){
    localStorage.removeItem('token');
    console.log('user logged out');
  }
}
