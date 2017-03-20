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
  selector: 'app-r2',
  templateUrl: './stormtrooper.html',
  styleUrls: ['./stormtrooper.css'],

})
export class stormtrooperComponent implements OnInit{

  constructor(private router: Router ,private DummyDataService:dummyDataService) {
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


}
