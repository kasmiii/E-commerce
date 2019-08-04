import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FauteComponent } from './faute.component';

describe('FauteComponent', () => {
  let component: FauteComponent;
  let fixture: ComponentFixture<FauteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FauteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
