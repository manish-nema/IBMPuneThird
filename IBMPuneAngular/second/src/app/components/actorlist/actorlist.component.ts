import { Component, OnInit } from '@angular/core';
import {Actor} from '../../model/actor.model';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.css';
import { ActorService } from '../../services/actor.service';
@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css',
  '../../../../node_modules/font-awesome/css/font-awesome.css',
  '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ActorlistComponent implements OnInit {
actors:Actor[];
formFlag:boolean;
btnText:string;
newActor:Actor;
selectedIndex:number;
tempActor:Actor;
actorService:Actor[];

  constructor(private actorsService:ActorService) { }

  ngOnInit() {
   
    this.actors=this.actorsService.getActors();

    this.newActor={name:'',city:''};
    this.formFlag=false;
    this.btnText='Show Form';
    this.selectedIndex=-1;
    this.tempActor={name:'',city:''};

  }
  deleteActor(ndx)
  {
    //this.actors.splice(ndx,1);
    this.actorsService.deleteActor(ndx);
  }
  addActor()
  {
   // this.actors.push(this.newActor);
   this.actorsService.addActor(this.newActor)
  //  this.newActor={name:'',city:''};
  }
  toggleForm()
  {
 this.formFlag=!this.formFlag;
 this.btnText=(this.formFlag) ? 'Hide Form': 'Show Form'

  }
  editActor(index)
  {
    this.tempActor=Object.assign({},this.actors[index]);
this.selectedIndex=index;


  }
  saveActor(n)
  {
    this.actorsService.updateActor(n,this.tempActor);
    //this.actors[n]=this.tempActor;
    this.selectedIndex=-1;
  }
cancelEdit()
{
  this.selectedIndex=-1;
}
keyHandler(event)
{
  if(event.key==="Escape")
  this.cancelEdit();
}
}