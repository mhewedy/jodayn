// canActivateViaAuthGuard.ts
// An example Guard calling an authentication service to give te user permission to continue (or not).
// For now, our authService returns a hardcoded value of 'true'. See auth.service.ts for details.
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

	constructor(private authService: AuthService) {
	}

	canActivate() {
		let isLoggedIn = this.authService.isLoggedIn();
		console.log('Is logged in? ', isLoggedIn);
		return isLoggedIn;
	}
}