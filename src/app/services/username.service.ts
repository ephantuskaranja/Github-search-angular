import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  private uname:string;
  private clientid = "4ad0e08a38d5d34b4f67";
  private clientsecret = "958e871ebc4485ad8584697ce34b9dfdacf6b817";

  constructor(private http:Http) {
  console.log("service is now ready!");
  this.uname="ephantuskaranja";
}
getUsername(){
  return this.http.get("https://api.github.com/users/" + this.uname + "?client_id=" +
   this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()))
}
getRepos(){
  return this.http.get("https://api.github.com/users/" + this.uname + "/repos?client_id=" +
   this.clientid + "&client_secret=" + this.clientsecret).pipe(map(res => res.json()))
}
updateUsername(uname:string){
  this.uname=uname;
}
}
