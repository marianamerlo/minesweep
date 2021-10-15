import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ScorepanelComponent } from './scorepanel.component';

describe('ScorepanelComponent', () => {
  let component: ScorepanelComponent;
  let fixture: ComponentFixture<ScorepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({     
      imports: [AppModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ScorepanelComponent);   
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
