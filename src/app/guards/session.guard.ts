import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Util } from '../common/util';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  util:Util = new Util();
  constructor(private _router:Router){}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
    const token = this.util.getObj("token");
    if(!token || token == null || token == ''){
      this._router.navigate(["/login"]);
      return false;
    }
    return true;
  }

}
