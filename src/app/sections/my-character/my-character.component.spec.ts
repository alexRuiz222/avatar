import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharacterComponent } from './my-character.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('MyCharacterComponent', () => {
  let component: MyCharacterComponent;
  let fixture: ComponentFixture<MyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCharacterComponent],
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
