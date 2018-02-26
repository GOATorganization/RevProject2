import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentviewComponent } from './commentview.component';

describe('CommentviewComponent', () => {
  let component: CommentviewComponent;
  let fixture: ComponentFixture<CommentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
