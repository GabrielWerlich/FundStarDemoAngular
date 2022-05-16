import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from '../custom.validator';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html'
  // styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public formSignup: FormGroup;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private notifyToastr: NotificationService
  ) {
    this.formSignup = this.fb.group({      
      name: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(34),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(38),
        Validators.required,
        Validators.email
      ])],
      role: [],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
  }

  submit(){

    //isbuSy
    this.formSignup.get('role').patchValue("user")
    console.log(this.formSignup.value)
    this
    .service
    .signUp(this.formSignup.value)
    .subscribe(
      (data: any) => {
        this.notifyToastr.showSucess("You account is now created! Enjoy :)")
        this.formSignup.reset()
        
      },
      (err) => {
        console.log(err)
        // this.form.get('password').patchValue(null)
      }
    );

  }

}
