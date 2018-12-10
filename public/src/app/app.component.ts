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
  onButtonClick(): void {
    this.getTasksFromService();
  }
  getDescriptionOnClick(id: String): void {
    this.getATask(id);
    console.log(id);
    }
  }
