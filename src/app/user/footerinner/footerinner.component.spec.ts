import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterinnerComponent } from './footerinner.component';

describe('FooterinnerComponent', () => {
  let component: FooterinnerComponent;
  let fixture: ComponentFixture<FooterinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
