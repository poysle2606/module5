import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  passWord1 = '123';

  constructor() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }
  ngOnInit(): void {
  }

  submitButton() {
    console.log(this.formLogin);
  }
}
