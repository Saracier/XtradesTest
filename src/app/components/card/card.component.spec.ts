import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MockUserService } from 'src/app/core/services/mock-user.service';
import { IUserData } from 'src/app/interfaces/IUserData';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let mockUserService: MockUserService;

  beforeEach(async () => {
    const mockUserServiceStub = {
      mockUserFromUsers: () => {
        return {
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
        } as IUserData;
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: MockUserService, useValue: mockUserServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    mockUserService = TestBed.inject(MockUserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users on ngOnInit', () => {
    spyOn(component, 'seedUsers');
    component.ngOnInit();
    expect(component.seedUsers).toHaveBeenCalled();
  });

  it('should seed users correctly', () => {
    component.seedUsers();
    expect(component.users.length).toBeGreaterThan(0);
  });
});
