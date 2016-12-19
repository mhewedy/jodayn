import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs'

import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    baseUrl: string = 'https://api.github.com'

    constructor(private http: Http){
    }

    searchUsers(term){
        return this.http.get(`${this.baseUrl}/search/users?q=${term}`)
            .map(users => users.json())
            .map(usersJson => usersJson.items);
    }

    showUserProfile(username: string){
        return this.http.get(`${this.baseUrl}/users/${username}`)
            .map(profile => profile.json());
    }
}