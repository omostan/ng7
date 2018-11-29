import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

//#region variables and constants 

restangularUsers: any = [];
httpUsers: any = [];
currentPage: number;
itemsPerPage: number = 10;
pageSize: number;
ChangePageSize: boolean;
appInfo: any [];
dropdownList: any = [];
selectedItems: any = [];
dropdownSettings: any = {};

userSettings: any = {};

//#endregion variables and constants 

constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private dataService: DataService) { }

//#region ngOnInit 

  ngOnInit() {
    this.getUsers();
    this.getHttpUsers();

    const savedPageNum = this.storage.get("savedPageNum");
    this.currentPage = savedPageNum !== null ? savedPageNum : 1;

    //#region scrollHandle for table header

window.onload = function(){
      var tableCont = document.querySelector('#mainBody')
      /**
       * scroll handle
       * @param {event} e -- scroll event
       */
      function scrollHandle (e){
        var scrollTop = this.scrollTop;
        this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
      }
      
      tableCont.addEventListener('scroll',scrollHandle)
    }

  //#endregion scrollHandle for table header
    
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];

    this.userSettings = {
      idField: 'id',
      textField: 'first_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: 'Filter...',
      closeDropDownOnSelection: true,
      clearSearchFilter: true,
      placeholder: 'Select'
    }

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: 'Filter...',
      closeDropDownOnSelection: true,
      clearSearchFilter: true,
      placeholder: 'Select'
    };
  }

//#endregion ngOnInit

  //#region getUsers 

getUsers() {
    this.dataService.getUsers().subscribe(
      (data: any []) => {
        data.forEach((user: any) => {
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
        data.forEach((user: any) => {
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
  this.storage.set("savedPageNum", this.currentPage);
}

/**
 * changePagesize
pageSize: number */
public changePagesize(num: number): void {
  const savedItemsPerPage = this.storage.get("savedItemsPerPage");
  this.itemsPerPage = savedItemsPerPage !== null ? savedItemsPerPage : this.pageSize + num;
  this.ChangePageSize = true;
  this.storage.set("savedItemsPerPage", num);
}


onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}

//#endregion onPageChange
}
