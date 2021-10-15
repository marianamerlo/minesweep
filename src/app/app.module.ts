import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatDialogModule, MatButtonModule, MatCheckboxModule, MatMenuModule,
	MatIconModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { GridComponent } from './components/grid/grid.component';
import { CellComponent } from './components/cell/cell.component';
import { ScorepanelComponent } from './components/scorepanel/scorepanel.component';

import { GameService } from './services/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomizeLevelDialog } from './components/customize-level/customize-level-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		GridComponent,
		CellComponent,
		ScorepanelComponent,
		CustomizeLevelDialog
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatMenuModule,
		MatIconModule,
		MatCardModule,
		MatToolbarModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [
		GameService
	],
	entryComponents: [
		CustomizeLevelDialog
	],
	bootstrap: [AppComponent]
})
export class AppModule { }