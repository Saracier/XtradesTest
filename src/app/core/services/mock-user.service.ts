import { Injectable } from '@angular/core';
import { IUserData } from '../../interfaces/IUserData';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  constructor() {}

  public userData: IUserData[] = [
    {
      id: 1,
      img: '/assets/user1.png',
      alert: '28',
      winRate: '52%',
      yieldValue: '10%',
      money: '9384',
      moneyOnPlus: true,
      whatRatio: '40%',
      isAuthenticatedUset: true,
      firstName: 'Roger',
      secondName: 'Doe',
      login: 'Roger D',
      userTag: '@rogerd1',
    },
    {
      id: 2,
      img: '/assets/user2.png',
      alert: '30',
      winRate: '86%',
      yieldValue: '-10%',
      money: '3397',
      moneyOnPlus: true,
      whatRatio: '56%',
      isAuthenticatedUset: false,
      firstName: 'Liam',
      secondName: 'Miller',
      login: 'Liam M',
      userTag: '@liamm2',
    },
    {
      id: 6,
      img: '/assets/user6.jpg',
      alert: '22',
      winRate: '75%',
      yieldValue: '9%',
      money: '5000',
      moneyOnPlus: false,
      whatRatio: '33%',
      isAuthenticatedUset: true,
      firstName: 'Emily',
      secondName: 'Taylor',
      login: 'Emily T',
      userTag: '@emilyt6',
    },
    {
      id: 7,
      img: '/assets/user7.jpg',
      alert: '14',
      winRate: '60%',
      yieldValue: '12%',
      money: '4220',
      moneyOnPlus: true,
      whatRatio: '25%',
      isAuthenticatedUset: false,
      firstName: 'James',
      secondName: 'Wilson',
      login: 'James W',
      userTag: '@jamesw7',
    },
    {
      id: 8,
      img: '/assets/user8.jpg',
      alert: '35',
      winRate: '82%',
      yieldValue: '7%',
      money: '7400',
      moneyOnPlus: true,
      whatRatio: '48%',
      isAuthenticatedUset: true,
      firstName: 'Sophia',
      secondName: 'Johnson',
      login: 'Sophia J',
      userTag: '@sophiaj8',
    },
    {
      id: 9,
      img: '/assets/user9.jpg',
      alert: '19',
      winRate: '69%',
      yieldValue: '5%',
      money: '2550',
      moneyOnPlus: false,
      whatRatio: '52%',
      isAuthenticatedUset: false,
      firstName: 'Oliver',
      secondName: 'Garcia',
      login: 'Oliver G',
      userTag: '@oliverg9',
    },
    {
      id: 10,
      img: '/assets/user10.jpg',
      alert: '50',
      winRate: '90%',
      yieldValue: '20%',
      money: '10000',
      moneyOnPlus: true,
      whatRatio: '60%',
      isAuthenticatedUset: true,
      firstName: 'Mia',
      secondName: 'Martinez',
      login: 'Mia M',
      userTag: '@miam10',
    },
  ];

  mockUserFromUsers() {
    // Math random returns number from 0 to 1. But it will never return 1, so we never exeed array length
    const randomIndex = Math.floor(Math.random() * this.userData.length);
    return this.userData[randomIndex];
  }
}
