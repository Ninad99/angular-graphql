import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemDetailComponent } from './list-item-detail.component';

describe('ListItemDetailComponent', () => {
  let component: ListItemDetailComponent;
  let fixture: ComponentFixture<ListItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
