import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

//#region variables and constants 

restangularUsers: any = [];
httpUsers: any = [];
currentPage = 1;
itemsPerPage: number = 10;
pageSize: number;
ChangePageSize: boolean;

//#endregion variables and constants 

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
          if (user.id <= 50) {
            this.restangularUsers.push(user);
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
          }
        });
      },
      err => console.error(err),
      () => console.log(this.httpUsers)
    );
  }

//#endregion getHttpUsers

//#region onPageChange 

public onPageChange(pageNum: number): void {
  this.pageSize = this.itemsPerPage*(pageNum - 1);
  this.currentPage = pageNum;
}

/**
 * changePagesize
pageSize: number */
public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
  this.ChangePageSize = true;
}

//#endregion onPageChange

}
