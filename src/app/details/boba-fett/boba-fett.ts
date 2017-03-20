/**
 * Created by swati on 19/3/17.
 */
/**
 * Created by swati on 19/3/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {dummyDataService} from '../../services/data_service'


@Component({
  selector: 'app-boba',
  templateUrl: './boba-fett.html',
  styleUrls: ['./boba-fett.css'],

})
export class BobaComponent implements OnInit{

  constructor(private router: Router,private dummyDataService:dummyDataService) {
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
