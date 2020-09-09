import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from "./format";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostDetailsServiceService {


  private _url: string = 'http://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getPostDetails():Observable<Ipost[]>{
    return this.http.get<Ipost[]>(this._url);
  }

}
