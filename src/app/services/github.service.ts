import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://api.github.com/users/karthiksripad18
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getUserDetails(userName: string) {
    const url = `https://api.github.com/users/${userName}`;
    return this.http.get(url);
  }

  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
