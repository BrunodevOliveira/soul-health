import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/authentication/services/log.service';
import { LogoutService } from './../../authentication/services/logout.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public logoutservice: LogoutService,
              public log: LogService) { }

  ngOnInit(): void {
  }

}
