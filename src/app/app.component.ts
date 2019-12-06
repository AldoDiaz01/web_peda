import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi-Peda';
  btnText:  string = "Descargar App";
  download(){
    window.open('assets/MyPeda.apk');
  }
}
