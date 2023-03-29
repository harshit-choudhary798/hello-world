import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressArrayComponent } from './email-address-array.component';

describe('EmailAddressArrayComponent', () => {
  let component: EmailAddressArrayComponent;
  let fixture: ComponentFixture<EmailAddressArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAddressArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailAddressArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
