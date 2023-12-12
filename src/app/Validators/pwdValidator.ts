import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check if password and confirm password match
export function pwdValidator(control: FormGroup): { [key: string]: boolean } | null{
  const password = control.get('password');
 
  const confirmPassword = control.get('confPassword');
    
  if (!password || !confirmPassword || password.value === confirmPassword.value) {
    return null; // Passwords match, no validation error
  } else {
    return { 'passwordMismatch': true }; // Passwords do not match, return an error
  }
};