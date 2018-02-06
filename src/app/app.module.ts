import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AboutService} from '../service/about.service';
import {Route, RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryServices} from '../service/gallery.services';



const routes:Routes = [
  {path:'about',component:AboutComponent},
  {path: 'contacts',  component:ContactComponent},
  {path: 'gallery',  component:GalleryComponent},
  {path :'',
  redirectTo:'/about',
  pathMatch:'full'}


];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AboutService ,GalleryServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
