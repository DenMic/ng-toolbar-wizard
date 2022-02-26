import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToolbarWizardComponent } from './ng-toolbar-wizard.component';

describe('NgToolbarWizardComponent', () => {
  let component: NgToolbarWizardComponent;
  let fixture: ComponentFixture<NgToolbarWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgToolbarWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToolbarWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
