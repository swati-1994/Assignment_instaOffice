import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {LoginComponent} from '../app/login/login.component';
import { ListComponent} from '../app/list/list.component';
import {RouterModule}   from '@angular/router';
import {BobaComponent} from '../app/details/boba-fett/boba-fett';
import {SpaceshipComponent} from '../app/details/spaceship/spaceship';



@NgModule({
  declarations: [
    AppComponent,ListComponent,LoginComponent,SpaceshipComponent,BobaComponent
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
