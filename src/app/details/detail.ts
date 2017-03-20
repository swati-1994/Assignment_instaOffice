/**
 * Created by swati on 21/3/17.
 */
/**
 * Created by swati on 20/3/17.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {data} from '../mock_data/mock_data'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css'],

})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  detail: {}
  id = null;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detail = data;

    for (let i=0; i<=data.length;i++) {

      console.log("data",data[i]);


    }


  }
}
