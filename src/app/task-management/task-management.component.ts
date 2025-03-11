import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
})
export class TaskManagementComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
