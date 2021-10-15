import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppModule } from 'src/app/app.module';
import { CustomizeLevelDialog } from './customize-level-dialog.component';
 

describe('CustomizeLevelDialog', () => {
  let component: CustomizeLevelDialog;
  let fixture: ComponentFixture<CustomizeLevelDialog>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({     
        imports: [ AppModule ],      
        providers: [ 
            {provide: MatDialogRef, useValue: {}},
            {provide: MAT_DIALOG_DATA, useValue: []},
        ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeLevelDialog);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should created', () => { 
    expect(component).toBeTruthy();
  });

});
