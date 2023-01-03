import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  apiURL=environment.apiEndPoint;
  constructor(private http:HttpClient) { }

  getAdminDash():Observable<any>{
    return this.http.get<any>(this.apiURL+"GetAdminParkingDashboard");
  }
}
