import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { UsuarioPedas } from '../usuariopedas';

@Component({
  selector: 'app-usuariopedas',
  templateUrl: './usuariopedas.component.html',
  styleUrls: ['./usuariopedas.component.scss'],
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
export class UsuarioPedasComponent implements OnInit {

  itemCount : number;
  btnText:  string = "Agregar un host";
  
  goalText1: number;
  goalText2: number;
  goalText3: string = "";
  goals = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getUsuarioPedas();
   
  }

  getUsuarioPedas() {
      
    return this._data.getUsuarioPedas()
     .subscribe((data: any) => {
      console.log("usuariopedas :" + data );
      this.goals = data;
      this.itemCount = this.goals.length;
    }) 

  } 
  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new UsuarioPedas;
     
    mydata.usuario = this.goalText1;
    mydata.peda = this.goalText2;
    mydata.calificacion = this.goalText3;

    return this._data.postUsuarioPedas(mydata)
     .subscribe((data: any) => {
      console.log("post usuariopedas :" + data );
      this.goalText1 = null;
      this.goalText2 = null;
      this.goalText3 = '';
      this.getUsuarioPedas();
    }) 
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length-=1;
    return this._data.deleteUsuarioPedas(i)
      .subscribe((data: any) => {
      console.log("deleted usuariopedas :" + data );
      this.getUsuarioPedas();
    }) 
  }
}