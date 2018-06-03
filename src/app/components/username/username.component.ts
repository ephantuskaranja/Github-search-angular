import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username:any[];

  constructor(private usernameService:UsernameService) {
  this.usernameService.getUsername().subscribe(username =>{
    console.log(username);
    this.username=username;
  })
 }

  ngOnInit() {
  }

}
