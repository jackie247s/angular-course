import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(`https://ng-recipe-9ed38.firebaseio.com/recipes.json`, this.recipeService.getRecipes());
    }

    fetchRecipes() {
        this.http.get(`https://ng-recipe-9ed38.firebaseio.com/recipes.json`)
            .pipe(
                map(
                (response: Response) => {
                    const recipes = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                })
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                },
                (error) => console.log(error)
            );
    }
}
