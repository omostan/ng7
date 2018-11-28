import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { AppInfo } from '../../app.settings';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   //#region keep the view bindables here (on top) for easy readability
   
   appInfo: any [];
   company: string     = this.company      ? this.company    : AppInfo.Company;
   author: string      = this.author       ? this.author     : AppInfo.Author;
   department: string  = this.department   ? this.department : AppInfo.Department;
   version: string     = this.version      ? this.version    : AppInfo.Version;
   copyright: string   = this.copyright    ? this.copyright  : AppInfo.Copyright;
   environment: string = environment.isDev ? 'Dev' : '';
  //  title: string       = AppInfo.Title;
 
   //#endregion keep the view bindables here (on top) for easy readability

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAppInfo();
  }

  // getAppInfo() {
  //   this.dataService.getAppInfo().subscribe(
  //     data => {
  //       console.log('AppInfo from data service: ', data.GetAppInfoResult)
  //       this.appInfo = data.GetAppInfoResult;

  //       //#region iterate over the appInfo array 
  //       this.appInfo.forEach((info: any) => {
  //         //console.log(info.Author);
  //         this.author     = info.Author;
  //         this.company    = info.Company;
  //         this.department = info.Department;
  //         this.version    = info.Version;
  //         this.copyright  = info.Copyright;
  //         // this.title      = info.ProductTitle;
  //       })
  //       //#endregion iterate over the appInfo array 
  //     },
  //     err => console.error(err),
  //     () => console.log('done fetching the application information')
  //   )
  // }

  

getAppInfo() {
  this.dataService.getAppInfo().subscribe(
    (data: any []) => {
      data.forEach((info: any) => {
        this.author     = info.Author;
        this.company    = info.Company;
        this.department = info.Department;
        this.version    = info.Version;
        this.copyright  = info.Copyright;
        this.appInfo.push(info);
      })
      this.appInfo = data;
    },
    err => console.error(err),
    () => console.log(this.appInfo)
  )
}

}
