import { Component } from '@angular/core';
import { Board } from './models/board';
import { GameService } from './services/game.service';
import { MatDialog } from '@angular/material';
import { CustomizeLevelDialog } from './components/customize-level/customize-level-dialog.component';

export interface DialogData {
	rows: number;
	cols: number;
	mineNumber: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public board: Board;
	public level: String;

	constructor(private gameService: GameService, public dialog: MatDialog) {
		this.easyLevel();
	}

	easyLevel(): void {
		this.level = "Easy Level";
		this.gameService.createBoard(8, 8, 10);
		this.board = this.gameService.getBoard();
	}

	mediumLevel(): void {
		this.level = "Medium Level";
		this.gameService.createBoard(15, 15, 25);
		this.board = this.gameService.getBoard();
	}

	hardLevel(): void {
		this.level = "Hard Level";
		this.gameService.createBoard(20, 20, 35);
		this.board = this.gameService.getBoard();
	}

	openCustomizeDialog(): void {
		const dialogRef = this.dialog.open(CustomizeLevelDialog, {
			disableClose: true,
			width: '250px',
			height: 'auto',
			data: { rows: null, cols: null, mineNumber: null }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result){
				this.level = "Custom Level";
				this.gameService.createBoard(result.rows, result.cols, result.mineNumber);
				this.board = this.gameService.getBoard();
			}
		});
	}
}