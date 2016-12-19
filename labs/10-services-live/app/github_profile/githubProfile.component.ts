
import {Component, Input} from '@angular/core'
import {GithubService} from '../services/github.service'

@Component({
    selector: 'github-profile',
    templateUrl: 'app/github_profile/githubProfile.component.html'
})
export class GithubProfileComponent {

    @Input() profile: any = null;

    constructor(private githubService: GithubService){
    }

    showUserProfile (username){
        this.githubService.showUserProfile(username)
            .subscribe(profile => this.profile = profile
            ,err => console.log(err)
            ,() => console.log("completed"));
    }
}