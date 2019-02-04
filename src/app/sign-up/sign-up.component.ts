import { Component, OnInit } from '@angular/core';
import { SignUp } from '../SignUp';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  SignUp: SignUp =  {
    mail: 'Aaa@lemail.com'
  }; 

  ngOnInit() {
  }

}
