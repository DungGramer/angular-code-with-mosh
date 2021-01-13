import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      if (control.value === 'mosh') {
        return { shouldBeUnique: true };
      }
      return null;
    }, 2000);
  }
}
