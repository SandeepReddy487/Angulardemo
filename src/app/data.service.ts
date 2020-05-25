import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpclient:any;

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    console.log(this.getData)
  }
}
 