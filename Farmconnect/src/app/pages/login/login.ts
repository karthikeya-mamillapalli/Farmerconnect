import { Component, inject } from '@angular/core';
import { UserLogin } from '../../core/models/classes/User.Model';
import { UserService } from '../../core/services/user-service';
import { Role } from '../../core/enums/Role.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  activeTab: string = 'login';
  showTab(tab: string) {
    this.activeTab = tab;
  }
  userServ = inject(UserService);

  loginObj: UserLogin = {
    userName: '',
    password: '',
    role: 0,
  };

  onLogin() {
    const loginDat = {};
    this.loginObj.role = Role.Farmer;
    this.userServ.login(this.loginObj).subscribe({});
  }
}
