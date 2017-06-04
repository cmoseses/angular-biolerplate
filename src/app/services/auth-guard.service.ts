import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
    if (localStorage.getItem(environment.currentUserStorageKey)) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: routerStateSnapshot.url}});
      return false;
    }
  }
}
