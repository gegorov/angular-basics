import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, HomePageComponent],
    imports: [AppRoutingModule, BrowserModule, FormsModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
