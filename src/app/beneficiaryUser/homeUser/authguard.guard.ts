import { LogService } from 'src/app/authentication/services/log.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private logservice: LogService,
              private router: Router){}


  canActivate():boolean {

    if(this.logservice.loggedIn()){
      return true
    }
    this.router.navigate(['/'])
    return false;

  }

}
