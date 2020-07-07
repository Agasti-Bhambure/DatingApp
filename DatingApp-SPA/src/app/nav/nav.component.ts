import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // Need to get name on nav html so authService made public
  constructor(public authService: AuthService,
              private alertify: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('Logged in succussfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  loggedIn(){
    return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // return !!token; // if token then will return token else false
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('user logged out');
  }
}
