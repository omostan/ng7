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
