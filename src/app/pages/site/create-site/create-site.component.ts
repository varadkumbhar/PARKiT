import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from 'src/app/core/services/site.service';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css']
})
export class CreateSiteComponent {
  buildingList: any[] = [];

  buildingObj: any = {
    "buildingId": 0,
    "siteId": 0,
    "buildingName": "",
    "buildingManagerName": "",
    "contactNo": ""
  };

  constructor(private siteSrv: SiteService, private router: Router, public toastSrv: ToastrService){

  }
}
