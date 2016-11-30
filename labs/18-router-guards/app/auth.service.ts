// auth.service.ts
// Example 'authentication service'. For now : always return true
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    isLoggedIn(){
    	return true; // do real authentication here!
	}

}
