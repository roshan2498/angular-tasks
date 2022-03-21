import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypingComponent } from './components/typing/typing.component';
import { WhoComponent } from './components/who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
