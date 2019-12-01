import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Hosts } from '../hosts';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss'],
  animations: [ 
    trigger ('goals', [
      transition('* => *', [
      query(':enter', style({opacity:0}), {optional : true}),

      query(':enter', stagger ('300ms', [
        animate('.6s ease-in', keyframes([
          style({opacity:0, transform: 'translateY(-75%)', offset:0}),
          style({opacity:0.5, transform: 'translateY(35px)', offset:0.3}),
          style({opacity:1, transform: 'translateY(0)', offset:1}),
        ]))]), {optional:true}),

        query(':leave', stagger ('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:1, transform: 'translateY(0)', offset:0}),
            style({opacity:0.5, transform: 'translateY(35px)', offset:0.3}),
            style({opacity:0, transform: 'translateY(-75%)', offset:1}),
          ]))]), {optional:true})
    ])
  ])
]
})
export class HostsComponent implements OnInit {

  itemCount : number = 1;
  btnText:  string = "Agregar un host";
  
  goalText1: string = "";
  goalText2: string = "";
  goalText5: number;
  goals = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getHosts();
   this.itemCount = this.goals.length;
  }

  getHosts() {
      
    return this._data.getHosts()
     .subscribe((data: any) => {
      console.log("hosts :" + data );
      this.goals = data;
    }) 

  } 
  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new Hosts;
     
    mydata.nombre = this.goalText1;
    mydata.direccion = this.goalText2;

    return this._data.postHosts(mydata)
     .subscribe((data: any) => {
      console.log("post hosts :" + data );
      this.goalText1 = '';
      this.goalText2 = '';
      this.goalText5 = null;
      this.getHosts();
    }) 
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length-=1;
    return this._data.deleteHosts(i)
      .subscribe((data: any) => {
      console.log("deleted hosts :" + data );
      this.getHosts();
    }) 
  }
}