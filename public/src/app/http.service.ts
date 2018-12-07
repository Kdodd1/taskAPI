import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getATask();
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getATask(){
      let task = this._http.get('/tasks/5c08421a383d8329104e7e3c');
      task.subscribe(data => console.log("Got a task!", data));
  }
}
