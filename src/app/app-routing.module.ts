import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipes/recipe-detail/select-recipe/select-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SiginComponent } from './auth/sigin/sigin.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
    { path: 'signin', component: SiginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: SelectRecipeComponent, pathMatch: 'full'},
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        { path: ':index', component: RecipeDetailComponent },
        { path: ':index/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: 'recipes', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouting {}
