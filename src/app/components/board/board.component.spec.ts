import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({     
      imports: [ AppModule ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should created', () => {
    fixture.detectChanges();   
    expect(component).toBeTruthy();
  });

});
