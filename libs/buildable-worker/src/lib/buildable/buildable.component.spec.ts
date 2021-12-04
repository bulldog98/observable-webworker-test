import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildableComponent } from './buildable.component';

describe('BuildableComponent', () => {
  let component: BuildableComponent;
  let fixture: ComponentFixture<BuildableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
