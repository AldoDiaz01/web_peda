import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from './usuarios';
import { Hosts } from './hosts';
import { Pedas } from './pedas';
import { Alcoholes } from './alcoholes';
import { UsuarioPedas } from './usuariopedas';
import { HostPedas } from './hostpedas';

//import { Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";


import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import { _throw as throwError } from 'rxjs/observable/throw';


@Injectable()
export class DataService {

// Define API
//apiURL = 'http://localhost:10010';
apiURL = 'https://mipeda.appspot.com';

 constructor(private http: HttpClient) { }

 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin' : '*',
     'Accept' : 'application/json'

   })
 }  


 getUsuarios(): Observable<Usuarios> {
  return this.http.get<Usuarios>(this.apiURL + '/usuarios')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postUsusarios(body) {
  return this.http.post(this.apiURL + '/usuarios', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteUsuarios(id) {
  return this.http.delete(this.apiURL + '/usuarios/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


getHosts(): Observable<Hosts> {
  return this.http.get<Hosts>(this.apiURL + '/hosts')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postHosts(body) {
  return this.http.post(this.apiURL + '/hosts', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteHosts(id) {
  return this.http.delete(this.apiURL + '/hosts/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}

getPedas(): Observable<Pedas> {
  return this.http.get<Pedas>(this.apiURL + '/pedas')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postPedas(body) {
  return this.http.post(this.apiURL + '/pedas', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deletePedas(id) {
  return this.http.delete(this.apiURL + '/pedas/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}

getAlcoholes(): Observable<Alcoholes> {
  return this.http.get<Alcoholes>(this.apiURL + '/alcoholes')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postAlcoholes(body) {
  return this.http.post(this.apiURL + '/alcoholes', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteAlcoholes(id) {
  return this.http.delete(this.apiURL + '/alcoholes/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


getUsuarioPedas(): Observable<UsuarioPedas> {
  return this.http.get<UsuarioPedas>(this.apiURL + '/usuariopedas')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postUsuarioPedas(body) {
  return this.http.post(this.apiURL + '/usuariopedas', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteUsuarioPedas(id) {
  return this.http.delete(this.apiURL + '/usuariopedas/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


getHostPedas(): Observable<HostPedas> {
  return this.http.get<HostPedas>(this.apiURL + '/hostpedas')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postHostPedas(body) {
  return this.http.post(this.apiURL + '/hostpedas', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteHostPedas(id) {
  return this.http.delete(this.apiURL + '/hostpedas/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}
// Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}