/**
 * Created by swati on 19/3/17.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {data} from '../mock_data/mock_data';

@Component({
  selector: 'charecters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {
    this.listing = data;
    console.log("data : ", JSON.stringify(this.listing));
  }

  listing = {};

  id=null;

  ngOnInit(): void {
    this.listing = data;
    console.log("data : ", JSON.stringify(this.listing));
  }

  detail(id) {
    this.id=id;
    console.log("Id: ", id);
  }


  next(){
    this.router.navigate(['detail/'+this.id])
  }
}
