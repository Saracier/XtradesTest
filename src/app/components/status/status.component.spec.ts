import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusComponent } from './status.component';
import { IUserData } from 'src/app/interfaces/IUserData';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;

    const testUser: IUserData = {
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
    };
    component.user = testUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user when input is set', () => {
    expect(component.user).toEqual(component.user);
  });
});
