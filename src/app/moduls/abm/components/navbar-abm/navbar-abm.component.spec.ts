import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAbmComponent } from './navbar-abm.component';

describe('NavbarAbmComponent', () => {
  let component: NavbarAbmComponent;
  let fixture: ComponentFixture<NavbarAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAbmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
