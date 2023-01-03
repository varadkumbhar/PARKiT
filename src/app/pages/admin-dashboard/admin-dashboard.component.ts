import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminDashboardService } from 'src/app/core/services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  dashboardArr: any [];
  dashboardObj: any = {
    "totSites": 0,
    "totUsers": 0,
    "totClients": 0,
    "totParkings": 0,
    "todaysParkings": 0,
    "todaysAmount": null,
    "totalAmount": 0
  }

  constructor(private http:HttpClient,private adminDashSrv:AdminDashboardService){
    this.dashboardArr=[];
  }
  ngOnInit():void{
    this.getAdminDash()
  }

  getAdminDash(){
    this.adminDashSrv.getAdminDash().subscribe((result:any)=>{
      this.dashboardArr = result.data;
      this.dashboardObj=this.dashboardArr[0];
    })
  }
}
