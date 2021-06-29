import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url=window.location.href;
    let split1=url.split('#id_token=')
    let id_token=split1.length>1?split1[1].split('&')[0] :null;
    if(id_token!=null){
      localStorage.setItem('id_token',id_token)
    }
    // console.log(id_token)
    if(id_token!=null || localStorage.getItem("id_token")){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;

    }
  }
  
}
