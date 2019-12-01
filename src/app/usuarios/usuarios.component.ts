import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
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
export class UsuariosComponent implements OnInit {

  itemCount : number = 1;
  btnText:  string = "Agregar un usuario";
  goalText1: string = "";
  goalText2: string = "";
  goalText3: string = "";
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
   this.getUsuarios();
   this.itemCount = this.goals.length;
  }

  getUsuarios() {
    return this._data.getUsuarios()
     .subscribe((data: any) => {
      console.log("usuarios :" + data );
      this.goals = data;
      //this.itemCount = this.itemCount+=1;
      //alert("usuarios " + data);
    }) 

  }

  addItem() {
    this.itemCount = this.itemCount+=1;
    var mydata = new Usuarios;
     
    mydata.nombre = this.goalText1;
    mydata.edad = this.goalText2;
    mydata.genero = this.goalText3;
  
    return this._data.postUsusarios(mydata)
     .subscribe((data: any) => {
      console.log("post usuarios :" + data );
      this.goalText1 = '';
      this.goalText2 = '';
      this.goalText3 = '';
      this.getUsuarios();
      }) 
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    //this.itemCount = this.goals.length-=1;
    return this._data.deleteUsuarios(i)
      .subscribe((data: any) => {
        console.log("deleted usuario :" + data );
        this.getUsuarios();
      })
  }
}