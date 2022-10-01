import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAplicationComponent } from './new-aplication.component';

describe('NewAplicationComponent', () => {
  let component: NewAplicationComponent;
  let fixture: ComponentFixture<NewAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
