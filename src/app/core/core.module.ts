import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

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
  ]
})
export class CoreModule { }
