import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  tasks = [];
  task = [];
  ngOnInit(){
    this.newTask = { title: "", description: ""}

  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our tasks!", data)
      this.tasks = data["data"];
    });
  }
  getATask(id){
    let observable = this._httpService.getATask(id);
    observable.subscribe(data => {
      console.log("got a task!", data)
      this.task = data["data"];
    });
  }
  addTask(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log(data);
      this.newTask = {title: "", description: ""}
      this.getTasksFromService();
    })
  }
  deleteATask(id){
    let observable = this._httpService.deleteATask(id);
    observable.subscribe(data => {
      console.log("delete a  task", data);
      this.getTasksFromService();
    })
  }
  updateATask(id, task){

    let observable = this._httpService.updateATask(id, task);
    observable.subscribe(data => {
      console.log("updated a task", data);
      this.getTasksFromService();
    })

  }
  onButtonClick(): void {
    this.getTasksFromService();
  }
  getDescriptionOnClick(id: String): void {
    this.getATask(id);
    console.log(id);
    }
  }
