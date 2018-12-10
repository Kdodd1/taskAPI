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
  getATask(id){
    return this._http.get(`/tasks/${id}/`);
  }
  addTask(newTask){
    return this._http.post('/tasks', newTask);
  }
  deleteATask(id){
    return this._http.delete(`/tasks/${id}/`);
  }
  updateATask(id, task){
    return this._http.put(`/tasks/${id}/`, task);
  }
}
