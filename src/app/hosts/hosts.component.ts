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

  itemCount : number;
  btnText:  string = "Agregar un host";
  
  goalText1: string = "";
  goalText2: string = "";
  goalText3: string = "";
  goalText4: string = "";
  goalText5: string = "";
  goalText6: string = "";
  goals = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getHosts();
   
  }

  getHosts() {
      
    return this._data.getHosts()
     .subscribe((data: any) => {
      console.log("hosts :" + data );
      this.goals = data;
      this.itemCount = this.goals.length;
    }) 

  } 
  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new Hosts;
     
    mydata.usuario = this.goalText1;
    mydata.contrasena = this.goalText2;
    mydata.nombre = this.goalText3;
    mydata.edad = this.goalText4;
    mydata.telefono = this.goalText5;
    mydata.direccion = this.goalText6;

    return this._data.postHosts(mydata)
     .subscribe((data: any) => {
      console.log("post hosts :" + data );
      this.goalText1 = '';
      this.goalText2 = '';
      this.goalText3 = '';
      this.goalText4 = '';
      this.goalText5 = '';
      this.goalText6 = '';
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