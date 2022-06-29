import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { EditableTextInputComponent } from './presentational-components/editable-text-input/editable-text-input.component';
import { RoundedButtonComponent } from './presentational-components/rounded-button/rounded-button.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    EditableTextInputComponent,
    RoundedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//563492ad6f917000010000016e45d0e1dd39438ab078dd0dfd61c0af
