import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { SelectRecipeComponent } from './recipe-detail/select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
            { path: '', component: SelectRecipeComponent, pathMatch: 'full' },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':index', component: RecipeDetailComponent },
            { path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
