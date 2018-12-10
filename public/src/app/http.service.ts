import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){

  }
  getTasks(){
  return this._http.get('/tasks');
  }
  getATask(){
      let task = this._http.get('/tasks/5c08421a383d8329104e7e3c');
      task.subscribe(data => console.log("Got a task!", data));
  }
}
