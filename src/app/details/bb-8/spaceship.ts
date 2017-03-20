/**
 * Created by swati on 19/3/17.
 */

import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {dummyDataService} from '../../services/data_service'



@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.html',
  styleUrls: ['./spaceship.css'],

})
export class SpaceshipComponent  implements OnInit{

  constructor(private router: Router, private dummyDataService:dummyDataService) {
  }

ngOnInit():void{
  this.getDummydata();
}


  Dummydata: any;
  getDummydata(): void {
    this.dummyDataService.getData()
      .then(Dummydata => {
        this.Dummydata = Dummydata;

      })
  }

}
