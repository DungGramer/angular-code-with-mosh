import { AbstractControl } from '@angular/forms';
export class PasswordValidators {
  // tslint:disable-next-line:typedef
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({ validOldPassword: true });
      } else {
        resolve(null);
      }
    });
  }
  static passwordShouldMatch(control: AbstractControl) {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword?.value !== confirmPassword?.value) {
      return { passwordShouldMatch: true };
    }
    return null;
  }
}
