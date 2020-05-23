import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
