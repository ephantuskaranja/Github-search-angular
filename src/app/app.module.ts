import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UsernameService } from './services/username.service';

import { AppComponent } from './app.component';
import { UsernameComponent } from './components/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
