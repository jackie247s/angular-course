import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'This is simply a test',
            `https://images.unsplash.com/photo-1526991204058-9d45349da374?ixlib=rb-0.3.5&ixid
            =eyJhcHBfaWQiOjEyMDd9&s=098a5989b6f52008feb5c9e2ef430565&auto=format&fit=crop&w=1950&q=80`,
            [
                new Ingredient('Bun', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Lettuce', 1)
            ]
            ),
        new Recipe(
            'French Fries',
            'This is simply a second test',
            `https://images.unsplash.com/photo-1526991204058-9d45349da374?ixlib=rb-0.3.5&ixid
            =eyJhcHBfaWQiOjEyMDd9&s=098a5989b6f52008feb5c9e2ef430565&auto=format&fit=crop&w=1950&q=80`,
            [
                new Ingredient('Potato', 5)
            ]
        )
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}
