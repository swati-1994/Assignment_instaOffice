/**
 * Created by swati on 19/3/17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  constructor(private router: Router) {
  }


  title = 'unlock the force';

  next(){
    console.log("i am working");
    console.log("i am not working");

    this.router.navigateByUrl('/list');


  }


}
