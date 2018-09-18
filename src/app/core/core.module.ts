import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRouting
  ],
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule { }
