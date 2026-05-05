import { Component, inject } from '@angular/core';
import { UserLogin } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';
import { Role } from '../../core/enums/Role.enum';
import { NgClass } from '@angular/common';
import { LoginResponse } from '../../core/models/interfaces/api.repsonse.Model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgClass,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  activeTab: string = 'login';
  router: any;
  showTab(tab: string) {
    this.activeTab = tab;
  }
  userServ = inject(UserService);

  loginObj: UserLogin = new UserLogin()


  onLogin() {
    this.userServ.login(this.loginObj).subscribe({
      next:(res:LoginResponse) =>{
        localStorage.setItem("farmerLoginData",JSON.stringify(res.data))
        this.router.navigate("/home")
      },
      error:(error)=>{
        alert("wrong cred")
      }
    });
  }

 
}
