import { Component, Input, OnInit } from '@angular/core';
import { MockUserService } from 'src/app/core/services/mock-user.service';
import { IUserData } from 'src/app/interfaces/IUserData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  users: IUserData[] = [];
  numberOfParticipants = Math.floor(Math.random() * 30) + 1;
  @Input() isTooLateToJoin = true;

  constructor(private _mockUserDataService: MockUserService) {}

  ngOnInit(): void {
    this.seedUsers();
  }

  seedUsers() {
    for (let i = 0; i < 7; i++) {
      this.users.push(this._mockUserDataService.userData[i]);
    }
  }
}
