import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalConst } from '../../../core/constant/Constant';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
onLogOff(){
localStorage.removeItem(GlobalConst.LOCAL_LOGIN_KEY)
}
}
