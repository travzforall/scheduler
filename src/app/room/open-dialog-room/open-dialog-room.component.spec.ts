import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogRoomComponent } from './open-dialog-room.component';

describe('OpenDialogRoomComponent', () => {
  let component: OpenDialogRoomComponent;
  let fixture: ComponentFixture<OpenDialogRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDialogRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDialogRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
