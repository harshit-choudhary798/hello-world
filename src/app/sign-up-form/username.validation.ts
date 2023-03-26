import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Usernamevalidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static async cannotContainHarshit(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (control.value === 'Harshit') {
          resolve({ cannotContainHarshit: true });
        } else {
          resolve(null);
        }

      }, 5000);
    });

  }
}
