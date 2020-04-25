import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteLoaderGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { return_url, url_new_app, token } = next.queryParams;
    if (return_url && url_new_app && token) {
      localStorage.setItem('token', token);
      localStorage.setItem('url_new_app', url_new_app);
      localStorage.setItem('return_url', return_url);
    }
    return true;
  }

}
