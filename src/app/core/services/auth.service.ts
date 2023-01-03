import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL=environment.apiEndPoint;
  }

  getLogin(obj: any):Observable<any> {
   return this.http.post<any>(this.apiURL + "login", obj);
  }
}
