import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGameMethodComponent } from './list-game-method.component';

describe('ListGameMethodComponent', () => {
  let component: ListGameMethodComponent;
  let fixture: ComponentFixture<ListGameMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGameMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGameMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
