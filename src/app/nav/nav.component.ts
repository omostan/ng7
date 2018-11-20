import { Component, OnInit } from '@angular/core';
import { AppInfo } from '../app.settings'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = true;  
  envFontSize: string = AppInfo.FontSize;
  envColor: string    = AppInfo.FontColor;
  webserver: string   = AppInfo.WebServer;
  appHeading: string  = AppInfo.Title;

  constructor() { }

  ngOnInit() {
  }

}
