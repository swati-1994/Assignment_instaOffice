/**
 * Created by swati on 19/3/17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {dummyDataService} from '../services/data_service';
import {OnInit} from '@angular/core';



@Component({
  selector: 'charecters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private router: Router, private DummyDataService: dummyDataService) {
  }

  ngOnInit(): void {
    this.getDummydata();

  }

  Dummydata: any;
  getDummydata(): void {
    this.DummyDataService.getData()
      .then(Dummydata => {
        this.Dummydata = Dummydata;

      })
  }


  spaceship(){
    this.router.navigateByUrl('/spaceship');
}

boba(){

  this.router.navigateByUrl('/boba');

}

po(){

  this.router.navigateByUrl('/po');
}
storm(){
  this.router.navigateByUrl('/trooper');
}

droid(){
  this.router.navigateByUrl('/r2');
}

darth(){
  this.router.navigateByUrl('/darth');

}

}
