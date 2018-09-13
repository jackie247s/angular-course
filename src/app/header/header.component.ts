import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onConsoleIt() {
    console.log(new Array(5));
  }
}
