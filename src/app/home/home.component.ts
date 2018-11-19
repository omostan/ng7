import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restangularUsers: any = [];
  httpUsers: any = [];
  totalRestResult: number;
  totalHttpResult: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
    this.getHttpUsers();
  }

  getUsers() {
    this.dataService.getUsers().subscribe(
      (data:any []) => {
        data.forEach(user => {
          if (user.id <= 10) {
            this.restangularUsers.push(user);
            this.totalRestResult = this.restangularUsers.length;
          }
        });
      },
      err => console.error(err),
      () => console.log(this.restangularUsers)
    );
  }

  getHttpUsers() {
    this.dataService.getHttpUsers().subscribe(
      (data:any []) => {
        data.forEach(user => {
          if (user.id > 10 && user.id <= 20) {
          this.httpUsers.push(user);
          this.totalHttpResult = this.httpUsers.length;
          }
        });
      },
      err => console.error(err),
      () => console.log(this.httpUsers)
    );
  }
}
