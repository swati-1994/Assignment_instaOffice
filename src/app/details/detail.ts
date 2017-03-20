/**
 * Created by swati on 21/3/17.
 */
/**
 * Created by swati on 20/3/17.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css'],

})
export class DetailComponent implements OnInit{
 constructor( private route:ActivatedRoute){


 }
 id=null;
   ngOnInit():void{
   this.id=this.route.snapshot.params['id'];
   console.log("id",this.id)
   }


}
