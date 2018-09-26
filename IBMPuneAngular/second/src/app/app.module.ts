import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import {ActorService } from './services/actor.service';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    ReversetextPipe,
    PiglatinPipe,
   
    
  ],
  imports: [
    BrowserModule,FormsModule,
  ],
  providers: [
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
