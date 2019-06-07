import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHostingComponent } from './games-hosting.component';

describe('GamesHostingComponent', () => {
  let component: GamesHostingComponent;
  let fixture: ComponentFixture<GamesHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
