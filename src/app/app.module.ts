// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import your routing module
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    TaskManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
