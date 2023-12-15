import { TestBed } from '@angular/core/testing';
import { MockUserService } from './mock-user.service';

describe('MockUserService', () => {
  let service: MockUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have userData array initialized', () => {
    expect(service.userData).toBeTruthy();
    expect(service.userData.length).toBeGreaterThan(0);
  });

  it('mockUserFromUsers should return a valid user object', () => {
    const randomUser = service.mockUserFromUsers();
    expect(randomUser).toBeTruthy();
    expect(randomUser.id).toBeDefined();
    expect(randomUser.firstName).toBeDefined();
    expect(randomUser.secondName).toBeDefined();
  });
});
