// Angular Modules
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

// Custom Components
import {GithubSearchComponent} from './github_search/githubSearch.component';
import {GithubProfileComponent} from './github_profile/githubProfile.component';

// Import services
import {GithubService} from "./services/github.service";

// Module declaration
@NgModule({
	imports     : [BrowserModule, HttpModule],
	declarations: [GithubSearchComponent, GithubProfileComponent],
	bootstrap   : [GithubSearchComponent],
	providers   : [GithubService] // DI voor service
})
export class AppModule {
}


