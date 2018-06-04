import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UsernameService } from './services/username.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsernameComponent } from './components/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
