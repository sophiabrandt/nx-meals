import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoadingComponent } from './show-loading.component';

describe('ShowLoadingComponent', () => {
  let component: ShowLoadingComponent;
  let fixture: ComponentFixture<ShowLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
