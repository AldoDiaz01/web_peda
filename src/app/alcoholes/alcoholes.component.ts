import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Alcoholes } from '../alcoholes';

@Component({
  selector: 'app-alcoholes',
  templateUrl: './alcoholes.component.html',
  styleUrls: ['./alcoholes.component.scss'],
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
export class AlcoholesComponent implements OnInit {

  itemCount : number;
  btnText:  string = "Agregar un alcohol";
  goalText1: string = "";
  goalText2: string = "";
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getAlcoholes();
   
  }

  getAlcoholes() {
    return this._data.getAlcoholes()
     .subscribe((data: any) => {
      console.log("alcoholes :" + data );
      this.goals = data;
      this.itemCount = this.goals.length;
      //this.itemCount = this.itemCount+=1;
      //alert("alcoholes " + data);
    }) 

  }

  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new Alcoholes;
     
    mydata.nombre = this.goalText1;
    mydata.tipo = this.goalText2;
  
    return this._data.postAlcoholes(mydata)
     .subscribe((data: any) => {
      console.log("post alcoholes :" + data );
      this.goalText1 = '';
      this.goalText2 = '';
      this.getAlcoholes();
      }) 
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    //this.itemCount = this.goals.length-=1;
    return this._data.deleteAlcoholes(i)
      .subscribe((data: any) => {
        console.log("deleted alcoholes :" + data );
        this.getAlcoholes();
      })
  }
}