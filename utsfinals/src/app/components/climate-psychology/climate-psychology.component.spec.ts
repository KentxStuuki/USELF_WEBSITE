import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatePsychologyComponent } from './climate-psychology.component';

describe('ClimatePsychologyComponent', () => {
  let component: ClimatePsychologyComponent;
  let fixture: ComponentFixture<ClimatePsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimatePsychologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimatePsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
