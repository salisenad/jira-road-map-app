import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardIssuesRowComponent } from './board-issues-row.component';

describe('BoardIssuesRowComponent', () => {
  let component: BoardIssuesRowComponent;
  let fixture: ComponentFixture<BoardIssuesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardIssuesRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardIssuesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
