import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {LoginComponent} from '../app/login/login.component';
import { ListComponent} from '../app/list/list.component';
import {RouterModule}   from '@angular/router';
import {BobaComponent} from '../app/details/boba-fett/boba-fett';
import {SpaceshipComponent} from './details/bb-8/spaceship';
import {stormtrooperComponent} from '../app/details/stormtrooper/stormtrooper'
import {r2Component} from '../app/details/r2-d2/r2-d2';
import {PoComponent} from '../app/details/c-3po/c3-po';
import {darthComponent} from '../app/details/darth-vader/darth-vader'
import {DetailComponent} from '../app/details/detail'

@NgModule({
  declarations: [
    AppComponent,ListComponent,LoginComponent,SpaceshipComponent,BobaComponent,stormtrooperComponent,r2Component,DetailComponent,
    PoComponent,darthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: 'list',
        component: ListComponent,
      },

      {
        path: 'detail/:id',
        component: DetailComponent,
      },



      {
        path: 'spaceship',
        component: SpaceshipComponent,
      },
      {
        path: 'boba',
        component: BobaComponent,
      },

      {
        path: 'login',
        component: LoginComponent,
      },

      {
        path: 'trooper',
        component: stormtrooperComponent,
      },

     {
        path: 'r2',
        component: r2Component,
      },

      {
        path: 'po',
        component: PoComponent,
      },

      {
        path: 'darth',
        component: darthComponent,
      },

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }

    ]),

  ],




  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
