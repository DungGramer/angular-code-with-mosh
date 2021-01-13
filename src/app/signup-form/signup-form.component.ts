import { UsernameValidators } from './username-validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(
      '',
      Validators.required,
      // Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  // tslint:disable-next-line:typedef
  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  get username(): any {
    return this.form.get('username');
  }
}
