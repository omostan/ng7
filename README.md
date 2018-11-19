# Ng7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Using Restangular To Make WCF-RESTService Calls (step-by-step)

1.) Run `npm install ngx-restangular` to install the latest version of ngx-restangular

2.) Import the module into the module.ts

*`import { RestangularModule } from 'ngx-restangular'`*


3.)  In module.ts, use RestangularProvider to configure the base URL for the REST-API service

<pre>
    export function RestangularConfigFactory(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:4200/restservice.svc');
        RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'})
    }
</pre>

4.) Add *`RestangularModule`* to the imports in module.ts

<pre>
    @NgModule({
        bootstrap: [ AppComponent ],
        declarations: [
            AppComponent,
        ],
        imports: [
            // Import RestangularModule and use the default config factory
            RestangularModule.forRoot(RestangularConfigFactory),
        ]
    })
</pre>

5.) In the component (e.g. data.service.ts) where it has to be used, import *`Restangular`*

<pre>import { Restangular } from 'ngx-restangular';</pre>


6.) Create an instance of *`Restangular`* in the constructor

<pre>constructor(private restangular: Restangular) {}</pre>

7.) Create a method (e.g. getUsers()) and use this.restangular instance (in data.service.ts) to fetch data from RESTful service or other Web API service

<pre>
    import { Injectable } from '@angular/core';
    import { HttpClient, HttpErrorResponse } from '@angular/common/http';
    import { Restangular } from 'ngx-restangular';
    import { IUsers } from './interface/users.Interface';
    import { Observable, throwError } from 'rxjs';
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
        return this.restangular.all('users.json').doGET().pipe(map(data => {
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
      getHttpUsers(): Observable<IUsers[]> {
        // return this.http.get('https://reqres.in/api/users');
        return this.http.get<IUsers[]>('../assets/data/users.json').pipe(map(data => {
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
</pre>

8.) Finally, call the getUsers() method from the users.component.ts

<pre>
    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.dataService.getUsers().subscribe(
        data => this.users = data,
        err => console.error(err),
        () => console.log('done fetching users!')

        )
    }
</pre>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
