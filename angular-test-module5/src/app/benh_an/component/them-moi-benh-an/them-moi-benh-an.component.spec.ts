import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiBenhAnComponent } from './them-moi-benh-an.component';

describe('ThemMoiBenhAnComponent', () => {
  let component: ThemMoiBenhAnComponent;
  let fixture: ComponentFixture<ThemMoiBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
