import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPageComponent } from './img-page.component';

describe('ImgPageComponent', () => {
  let component: ImgPageComponent;
  let fixture: ComponentFixture<ImgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
