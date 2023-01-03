import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from 'src/app/core/services/site.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent {
  isSidePanel: boolean = false;

  siteArray: any[];
  siteObj: {};


  buildingList: any[] = [];

  buildingObj: any = {
    "buildingId": 0,
    "siteId": 0,
    "buildingName": "",
    "buildingManagerName": "",
    "contactNo": ""
  };

  constructor(private siteSrv: SiteService, private router: Router, public toastSrv: ToastrService, private http: HttpClient) {
    this.siteArray=[]
    this.siteObj = {
      siteId: 0,
      clientId: 0,
      siteName: "",
      siteCity: "",
      siteAddress: "",
      sitePinCode: "",
      totalBuildings: 0,
      createdDate: new Date(),
      getVBuildingss: [
        {

        }
      ]
    }
  }
  ngOnInit(): void {
    this.getAllSite();
  }


  getAllSite() {
    this.siteSrv.getAllSite().subscribe((result: any) => {
      this.siteArray = result.data
    });
  }

  addForm(){
    this.isSidePanel=true;
  }

  closeForm(){
    this.isSidePanel=false;
  }
}
