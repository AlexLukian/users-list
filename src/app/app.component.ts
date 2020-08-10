import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-list';
  users: string[] = ['SuperMan', 'Gambit', 'Batman', 'CaptainAmerica', 'Hulk'];
}
