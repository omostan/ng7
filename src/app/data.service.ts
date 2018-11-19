import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private restangular: Restangular) {  }
/**
 * GET method for Restangular API service call
 */
  getUsers() {
    // return this.restangular.all('users').doGET();
    return this.restangular.all('users').doGET().pipe(map(data => {
      return data;
    }),
    // "catchError" instead of "catch"
    catchError(error => {
      return throwError(error.message || 'Server Error!');
    })
    );
  }
/**
 * GET method for HttpClient API service call
 */
  getHttpUsers() {
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get('http://localhost:3000/users').pipe(map(data => {
        return data;
      }),
      // "catchError" instead of "catch"
      catchError(error => {
        console.log(error.message);
        return throwError(error.message || 'Server Error!');
      })
    );
   }
}
