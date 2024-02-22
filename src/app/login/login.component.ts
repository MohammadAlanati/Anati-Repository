import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  document: any;

  constructor() {}

  ngOnInit() {


    // validation inputs form //
    document.addEventListener('DOMContentLoaded', () => {
      var emailInput = document.getElementById('email') as HTMLInputElement;
      var emailError = document.getElementById(
        'emailError'
      ) as HTMLInputElement;

      var passInput = document.getElementById('password') as HTMLInputElement;
      var passError = document.getElementById('passError') as HTMLInputElement;

      emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
          emailError.textContent = ''; // Clear the error message
          emailError.className = 'error'; // Reset the visual state of the message
        } else {
          this.showErrorEmail(emailInput,emailError);
        }
      });

      passInput.addEventListener('input', () => {
        if (passInput.validity.valid) {
          passError.textContent = ''; // Clear the error message
          passError.className = 'error'; // Reset the visual state of the message
        } else {
          this.showErrorPass(passInput,passError);
        }
      });

 
    });
  }

  showErrorEmail(emailInput:any,emailError:any) {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = 'Please enter an email address.';
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = 'Please enter a valid email address.';
    }

    emailError.className = 'error active';
  }

  showErrorPass(passInput :any,passError:any) {
    if (passInput.validity.valueMissing) {
      passError.textContent = 'Please enter a password.';
    } else if (passInput.validity.typeMismatch) {
      passError.textContent = 'Please enter a valid password.';
    }

    passError.className = 'error active';
  }
}

// apply for material design components to show in html page  //

const selector =
'.mdc-button, .mdc-icon-button, .mdc-card__primary-action ,.mdc-text-field';
const textF = '.mdc-text-field ';
const ripples = [].map.call(
document.querySelectorAll(selector),
function (el) {
  return new MDCRipple(el);
}
);
