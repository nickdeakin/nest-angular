import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http: HttpClient) {
  }

  nestCall(): Observable<any> {
    return this.http.get(`http://127.0.0.1:3000/hello`);
  }
}
