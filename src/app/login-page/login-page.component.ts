import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Security } from 'src/utils/security.util';
import { CustomValidator } from '../custom.validator';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;
  public loginFailed = false;
  public userteste: User
  

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
    
  }

  logIn(){
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.setUser(data.user, data.token);
        },
        (err) => {
          this.loginFailed = true;
          this.form.get('password').patchValue(null)
        }
      );


  } 

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/dashboard']);
  }


  getUser() {
    return Security.getUser();
  }

}
