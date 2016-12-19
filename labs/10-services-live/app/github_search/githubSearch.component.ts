import {Component} from '@angular/core'
import {GithubService} from '../services/github.service'

@Component({
    selector: 'github-search',
    templateUrl: 'app/github_search/githubSearch.component.html'
})


export class GithubSearchComponent {

    items: any;

    constructor(private githubService: GithubService){

    }
    
    searchUsers(username: string){
        this.githubService.searchUsers(username)
            .subscribe(
                items => {this.items = items}
                , err => console.log('error')
                , () => console.log('completed'));
            
    }
}