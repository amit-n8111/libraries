import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnLibraryModule } from 'an-library';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, AnLibraryModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
