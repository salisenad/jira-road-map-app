import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardIssuesComponent } from './board-issues.component';

describe('BoardIssuesComponent', () => {
  let component: BoardIssuesComponent;
  let fixture: ComponentFixture<BoardIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
