import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  private username:string;

  constructor(private http:Http) {
  console.log("service is now ready!");
  this.username="ephantus";
}
getUsername(){
  return this.http.get("https://api.github.com/users/" + this.username).pipe(map(res => res.json()))
}
}
