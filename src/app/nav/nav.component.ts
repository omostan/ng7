import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  appTitle: string = 'NG7 Tutorials';

  constructor() { }

  ngOnInit() {
  }

}
