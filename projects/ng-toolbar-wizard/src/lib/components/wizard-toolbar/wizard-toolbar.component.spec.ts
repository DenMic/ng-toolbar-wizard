import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardToolbarComponent } from './wizard-toolbar.component';

describe('WizardToolbarComponent', () => {
  let component: WizardToolbarComponent;
  let fixture: ComponentFixture<WizardToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
