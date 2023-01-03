import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  apiURL=environment.apiEndPoint
  constructor(private http:HttpClient) { }

  getAllSite() {
   return this.http.get(this.apiURL+'GetAllSitess');
  }
}
