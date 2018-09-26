import { Injectable } from '@angular/core';
import {Actor} from '../model/actor.model';
@Injectable({
  providedIn: 'root'
})
export class ActorService {
actors:Actor[];

  constructor() {

    this.actors=[{name:'Rajesh Khanna',city:'Mumbai',salary:25000},
    {name:'Vinod Khanna',city:'Pune',salary:20000},
    {name:'Salman Khan',city:'Indore',salary:10000},
    {name:'Nick jones',city:'USA',salary:33000}
  ];

   }
addActor(actor)
{
  this.actors.push(actor);
}
   deleteActor(index)
   {
     this.actors.splice(index,1);
   }
   
   updateActor(index,actor)
   {
     this.actors.splice(index,1,actor);
   }

   getActors()
   {
     return this.actors;
   }
}
