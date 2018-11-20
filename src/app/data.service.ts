//#region imports 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';
import { throwError, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUsers } from './interface/users.Interface';

//#endregion imports

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private restangular: Restangular) {  }

  //#region getAppInfo

  getAppInfo() {
    return this.restangular.all('appInfo/').doGET().pipe(map(data => {
      return data;
    }),
    // "catchError" instead of "catch"
    catchError(error => {
      return throwError(error.message || 'Server Error!');
    })
    );
  }

  //#endregion getAppInfo

//#region getUsers 

/**
 * GET method for Restangular API service call
 */
  getUsers() {
    return this.restangular.all('users').doGET().pipe(map(data => {
      return data;
    }),
    // unlike earlier versions of Angular, we have to use catchError instead of "catch"
    catchError(error => {
      return throwError(error.message || 'Server Error!');
    })
    );
  }

//#endregion getUsers
  
//#region getHttpUsers 

/**
 * GET method for HttpClient API service call
 */
  getHttpUsers(): Observable<IUsers[]> {
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get<IUsers[]>('http://localhost:3000/users').pipe(tap(data => {
        return data;
      }),
      // "catchError" instead of "catch"
      catchError(error => {
        console.log(error.message);
        return throwError(this.handleError(error.message || 'Server Error!', []));
      })
    );
   }

//#endregion getHttpUsers

//#region HttpClient Error Handling

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

//#endregion HttpClient Error Handling

}
