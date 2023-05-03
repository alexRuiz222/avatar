import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryComponent } from './memory.component';
import { AvatarApiService } from 'src/app/shared/services/avatar-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('MemoryComponent', () => {
  let component: MemoryComponent;
  let fixture: ComponentFixture<MemoryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AvatarApiService],
      declarations: [MemoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
