/**
 * Created by swati on 19/3/17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'charecters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private router: Router) {
  }

spaceship(){

  this.router.navigateByUrl('/spaceship');
}


}