import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error
      }
    );
  }
}
