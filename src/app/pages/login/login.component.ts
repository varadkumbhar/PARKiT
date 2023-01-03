import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerObj: any;

  loginObj = {
    UserName: '',
    UserPassword: ''
  }

  isResgistrationOpen: boolean = false;

  constructor(private router: Router, private authServ: AuthService, private toastr: ToastrService) {  }


  getLogin() {
    this.authServ.getLogin(this.loginObj).subscribe((result: any) => {
      if (result.result == false) {
        this.toastr.error(result.message)
        return;
      }
      // console.log(result);
      localStorage.setItem('userDetails', JSON.stringify(result.data));


      if (result.data.userRole == 'client') {
        this.router.navigateByUrl('/admin-dashboard');
      }else if( result.data.userRole=='admin' || result.data.userRole=='Admin' ){
        this.router.navigateByUrl('/admin-dashboard');
      }else if(result.data.userRole=='entry gate operator'){
        this.router.navigateByUrl('/entry-parking');
      }else if(result.data.userRole=='exit gate operator'){
        this.router.navigateByUrl('/exit-parking');
      }
    })

  }




  onRegister() {
    this.isResgistrationOpen = true;
  }

  onRegisterCandidate() {

  }
  getRegLogin() {
    this.isResgistrationOpen = false;
  }

}
