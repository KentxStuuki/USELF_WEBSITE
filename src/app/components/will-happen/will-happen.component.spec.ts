import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillHappenComponent } from './will-happen.component';

describe('WillHappenComponent', () => {
  let component: WillHappenComponent;
  let fixture: ComponentFixture<WillHappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WillHappenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WillHappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
