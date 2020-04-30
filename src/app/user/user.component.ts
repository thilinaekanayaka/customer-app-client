import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userauth: UserauthService) { }

  ngOnInit(): void {
  }

  register(form) {
    console.log(form.value);
    this.userauth.registerUser(form.value);
  }

}
