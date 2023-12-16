import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';
import { IUserData } from 'src/app/interfaces/IUserData';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;

    component.user = {
      id: 1,
      img: '/assets/images/user1.png',
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
    };
    component.place = '1';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default place as set', () => {
    expect(component.place).toBe('1');
  });

  it('should update place when input is set', () => {
    const testPlace = '2';
    component.place = testPlace;
    fixture.detectChanges();
    expect(component.place).toBe(testPlace);
  });

  it('should update user when input is set', () => {
    const testUser: IUserData = {
      id: 2,
      img: '/assets/user2.png',
      alert: '30',
      winRate: '86%',
      yieldValue: '-10%',
      money: '3397',
      moneyOnPlus: false,
      whatRatio: '56%',
      isAuthenticatedUset: false,
      firstName: 'Liam',
      secondName: 'Miller',
      login: 'Liam M',
      userTag: '@liamm2',
    };
    component.user = testUser;
    fixture.detectChanges();
    expect(component.user).toEqual(testUser);
  });
});
