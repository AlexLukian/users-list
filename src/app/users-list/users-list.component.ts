import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUserList();
  }

  search(value: string){
    this.usersList = this.usersService.findUser(value);
  }
  sort(direction: string){
    this.usersList = this.usersService.sortUsers(direction);
  }
}
