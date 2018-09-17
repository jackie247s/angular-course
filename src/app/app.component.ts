import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBwOgrh6MiFWVSnUlpo51oplJ2UbEQhmQU',
      authDomain: 'ng-recipe-9ed38.firebaseapp.com'
    });
  }
}
