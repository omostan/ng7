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

3a.) Create the bas URL in a separate sampleRestApi.ts file in the root folder

<pre>
    /** This method sets the url to get fake data for testing.
     *  Ref: https://reqres.in/api/
     *  A hosted REST-API ready to respond to AJAX requests.
     *  It is used to test front-end against a real API.
     *  GET, POST, PUT & DELETE are supported.
     */
    export function fakeData(): any {
      return 'https://reqres.in/api/';
    }
</pre>

3b.)  In module.ts, use RestangularProvider to configure the base URL for the REST-API service

<pre>
    import { fakeData } from './sampleRestApi';

    /**
     *
     * @param RestangularProvider is used to configure the base URL for the REST-API service
     */
    export function RestangularConfigFactory(RestangularProvider) {
      RestangularProvider.setBaseUrl(fakeData());
      RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer V6vzEfEimH2PoiretEB7o0jBhp5ICk#d'});
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
            // import RestangularModule and use the exported RestangularConfigFactory
            RestangularModule.forRoot(RestangularConfigFactory),
        ]
    })
</pre>

5a.) In Service (e.g. data.service.ts) where it has to be used, import both *`Restangular, HttpClient, HttpErrorResponse, catchError, and map`*

<pre>
    import { HttpClient, HttpErrorResponse } from '@angular/common/http';
    import { Restangular } from 'ngx-restangular';
    import { catchError, map } from 'rxjs/operators';
</pre>


5b.) Create an instance of *`Restangular`* in the constructor

<pre>constructor(private restangular: Restangular) {}</pre>

5c.) Create a method (e.g. getUsers()) and getHttpUsers() to fetch data from RESTful service or other Web API service

<pre>
    @Injectable({
      providedIn: 'root'
    })
    export class DataService {

      constructor(private http: HttpClient, private restangular: Restangular) {  }
    /**
     * GET method for Restangular API service call
     */
      getUsers() {
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
        return this.http.get('https://reqres.in/api/users').pipe(map(data => {
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

6.) Finally, call the methods from the home.component.ts

<pre>
    import { Component, OnInit } from '@angular/core';
    import { DataService } from '../data.service';
    import { throwError } from 'rxjs';

    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.scss']
    })
    export class HomeComponent implements OnInit {

      restangularUsers: Array<any> = [];
      httpUsers: Array<any> = [];
      users: Array<any> = [];
      total: number;

      constructor(private dataService: DataService) { }

      ngOnInit() {
        this.getUsers();
        this.getHttpUsers();
      }

      getUsers() {
        this.dataService.getUsers().subscribe(
          data => {
            data.data.forEach(user => {
              if (user.id <= 10) {
                this.restangularUsers.push(user);
                this.total = this.restangularUsers.length;
              }
            });
          },
          err => console.error(err),
          () => console.log(this.restangularUsers)
        );
      }

      getHttpUsers() {
        this.dataService.getHttpUsers().subscribe(
          data => {
            this.users.push(data);
            this.users[0].data.forEach(user => {
              if (user.id >= 11 && user.id <= 20) {
              this.httpUsers.push(user);
              this.total = this.httpUsers.length;
              }
            });
          },
          err => console.error(err),
          () => console.log(this.httpUsers)
        );
      }
    }
</pre>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
