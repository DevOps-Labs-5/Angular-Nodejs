// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';

const routes: Routes = [
  { path: 'users', component: UserManagementComponent },  // Route for user management
  { path: 'tasks', component: TaskManagementComponent },  // Route for task management
  { path: '', redirectTo: '/users', pathMatch: 'full' },  // Default route redirects to users
  { path: '**', redirectTo: '/users' }  // Redirects to users if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
