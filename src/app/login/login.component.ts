/**
 * Created by swati on 19/3/17.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(private router: Router) {
  }
  user = {
    id: null,
    password: null
  };
  title = 'Unlock the force';
  next() {
    if ((this.user.id === 'yoda') && (this.user.password === 'dogbah')) {
      this.router.navigateByUrl('/list');
    }
  };
}
