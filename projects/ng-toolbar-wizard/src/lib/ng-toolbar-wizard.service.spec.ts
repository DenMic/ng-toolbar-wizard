import { TestBed } from '@angular/core/testing';

import { NgToolbarWizardService } from './ng-toolbar-wizard.service';

describe('NgToolbarWizardService', () => {
  let service: NgToolbarWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgToolbarWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
