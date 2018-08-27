import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nothing';
  feature = 'recipes' ;

  updateFeature(feature: string) {
    this.feature = feature;
  }
}
