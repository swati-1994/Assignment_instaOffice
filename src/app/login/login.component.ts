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

  hero = {};
  title = 'Unlock the force';

  next() {
    this.router.navigateByUrl('/list');
  };
}
