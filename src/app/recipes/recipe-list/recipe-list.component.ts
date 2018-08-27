import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    `https://images.unsplash.com/photo-1526991204058-9d45349da374?ixlib=rb-0.3.5&ixid
    =eyJhcHBfaWQiOjEyMDd9&s=098a5989b6f52008feb5c9e2ef430565&auto=format&fit=crop&w=1950&q=80`),
    new Recipe('Second Test Recipe', 'This is simply a second test',
      `https://images.unsplash.com/photo-1526991204058-9d45349da374?ixlib=rb-0.3.5&ixid
    =eyJhcHBfaWQiOjEyMDd9&s=098a5989b6f52008feb5c9e2ef430565&auto=format&fit=crop&w=1950&q=80`)
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }

}
