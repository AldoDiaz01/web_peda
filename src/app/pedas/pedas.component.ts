import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Pedas } from '../pedas';

@Component({
  selector: 'app-pedas',
  templateUrl: './pedas.component.html',
  styleUrls: ['./pedas.component.scss'],
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
export class PedasComponent implements OnInit {

  itemCount : number;
  btnText:  string = "Agregar una peda";
  goalText1: string = "";
  goalText2: string = "";
  goalText3: string = "";
  goalText4: number;
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getPedas();
   
  }

  getPedas() {
    return this._data.getPedas()
     .subscribe((data: any) => {
      console.log("pedas :" + data );
      this.goals = data;
      this.itemCount = this.goals.length;
      //this.itemCount = this.itemCount+=1;
      //alert("pedas " + data);
    }) 

  }

  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new Pedas;
     
    mydata.cantidad = this.goalText1;
    mydata.horario = this.goalText2;
    mydata.presupuesto = this.goalText3;
    mydata.host = this.goalText4;
  
    return this._data.postPedas(mydata)
     .subscribe((data: any) => {
      console.log("post pedas :" + data );
      this.goalText1 = '';
      this.goalText2 = '';
      this.goalText3 = '';
      this.goalText4 = null;
      this.getPedas();
      }) 
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    //this.itemCount = this.goals.length-=1;
    return this._data.deletePedas(i)
      .subscribe((data: any) => {
        console.log("deleted pedas :" + data );
        this.getPedas();
      })
  }
}