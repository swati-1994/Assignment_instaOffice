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
image:String;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


    for (let i=0; i<data.length;i++) {

      console.log("data",data[i].id);
      console.log("image",data[i].image);
if(data[i].id==this.id)
{
  this.detail=data[i];
  this.image=data[i].image;

  console.log("if_data",this.detail);

}

    }


  }
}
