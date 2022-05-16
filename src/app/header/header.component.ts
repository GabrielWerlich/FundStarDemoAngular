import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Security } from 'src/utils/security.util';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public user : User

  ngOnInit() {
    this.user = Security.getUser();
  }

  logout(){
    Security.clear();
    this.router.navigate(['/login']);
  }

}
