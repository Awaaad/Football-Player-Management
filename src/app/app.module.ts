import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { HeaderSharedComponent } from './shared/header-shared/header-shared.component';
import { FooterSharedComponent } from './shared/footer-shared/footer-shared.component';
import { MainSharedComponent } from './shared/main-shared/main-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    HeaderSharedComponent,
    FooterSharedComponent,
    MainSharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
