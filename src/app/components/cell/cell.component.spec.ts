import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { CellComponent } from './cell.component';

describe('CellComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({     
      imports: [AppModule]
    })
    .compileComponents();
  }));

  it('should created', () => {
    const fixture = TestBed.createComponent(CellComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
