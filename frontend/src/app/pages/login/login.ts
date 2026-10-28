import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter your email and password.');
      return;
    }

    alert('Login form submitted! Connect your backend to authenticate.');
  }
}
