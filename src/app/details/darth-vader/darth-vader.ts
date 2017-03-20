/**
 * Created by swati on 20/3/17.
 */
/**
 * Created by swati on 20/3/17.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {dummyDataService} from '../../services/data_service'




@Component({
  selector: 'app-vader',
  templateUrl: './darth-vader.html',
  styleUrls: ['./darth-vader.css'],

})
export class darthComponent implements OnInit{

  constructor(private router: Router,private dummyDataService:dummyDataService ) {
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
