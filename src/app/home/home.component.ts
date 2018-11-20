import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PaginationInstance } from '../../../node_modules/ngx-pagination/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

//#region variables and constants 

restangularUsers: any = [];
httpUsers: any = [];
totalRestResult: number;
totalHttpResult: number;
p: number[] = []; 

//#endregion variables and constants 

//#region ngx-pagination

public filter: string = '';
public maxSize: number = 7;
public directionLinks: boolean = true;
public autoHide: boolean = false;
public responsive: boolean = false;
public config: PaginationInstance = {
  id: 'advanced',
  itemsPerPage: 10,
  currentPage: 1
  };

  public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

onPageChange(number: number) {
  console.log('change to page', number);
  this.config.currentPage = number;
}

//#endregion ngx-pagination

constructor(private dataService: DataService) { }

//#region ngOnInit 

  ngOnInit() {
    this.getUsers();
    this.getHttpUsers();
    //this.getAppInfo();
  }

//#endregion ngOnInit

  //#region getUsers 

getUsers() {
    this.dataService.getUsers().subscribe(
      (data: any []) => {
        data.forEach(user => {
          if (user.id <= 25) {
            this.restangularUsers.push(user);
            this.totalRestResult = this.restangularUsers.length;
          }
        });
      },
      err => console.error(err),
      () => console.log(this.restangularUsers)
    );
  }

//#endregion getUsers

  //#region getHttpUsers 

getHttpUsers() {
    this.dataService.getHttpUsers().subscribe(
      (data:any []) => {
        data.forEach(user => {
          if (user.id > 25 && user.id <= 50) {
          this.httpUsers.push(user);
          this.totalHttpResult = this.httpUsers.length;
          }
        });
      },
      err => console.error(err),
      () => console.log(this.httpUsers)
    );
  }

//#endregion getHttpUsers


}
