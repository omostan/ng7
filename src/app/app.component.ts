import { Component } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { setTheme } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbPaginationConfig]
})
export class AppComponent {
  title = 'License Database';

  constructor(config: NgbPaginationConfig) {
    setTheme('bs4');
    config.size = 'sm';
    config.boundaryLinks = true;
    // config.pageSize = 5;
    config.maxSize = 7;
    config.rotate = true;
    config.ellipses = false;
  }
}
