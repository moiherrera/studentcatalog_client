import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, StudentComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
