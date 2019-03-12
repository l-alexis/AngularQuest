import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit { 

  private isButtonVisible = !this.isButtonVisible;
  User = {
  nom : "Bob",
  firstName : 'John',
  age : 25,
  quote : '',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }
   
  ngOnInit() {
  }

}
