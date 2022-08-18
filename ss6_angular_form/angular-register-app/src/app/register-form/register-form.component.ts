import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  formRegister: FormGroup;

  constructor() {
    this.formRegister = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      passWordAgain: new FormControl('', [Validators.required, Validators.maxLength(6)  ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl(),
      phone: new FormControl('', [Validators.pattern('^\\+84\\d{9,10}$')])
    }, this.validateCustomPass);
  }

  validateCustomPass(password: AbstractControl) {
    const value1 = password.value.passWord;
    const value2 = password.value.passWordAgain;
    if (!(value1 === value2)) {
      return {invalid: true};
    }
    return null;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formRegister.value);
  }
}
