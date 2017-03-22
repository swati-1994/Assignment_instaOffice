/**
 * Created by swati on 19/3/17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private router: Router) {
  }

  valid_username = null;
  invalid_password = null;
  user = {
    id: null,
    password: null
  };
  title = 'Unlock the force';

  next() {
    if (this.user.id == 'yoda') {
      this.valid_username = true;
      if (this.user.password == 'dogbah') {
        this.router.navigateByUrl('/list');
      }
      else {
        this.invalid_password = true;
      }
    }
    else {
      console.log("Invalid");
      this.valid_username = false;
    }
  };
}
