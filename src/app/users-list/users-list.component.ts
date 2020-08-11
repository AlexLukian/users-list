import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }
  Users = ['SuperMan', 'Gambit', 'Batman', 'CaptainAmerica', 'Hulk'];

  ngOnInit(): void {
  }
}
