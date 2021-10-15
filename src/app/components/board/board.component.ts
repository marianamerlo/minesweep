import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board';


@Component({
	selector: 'board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board;

	constructor() { }

	ngOnInit() {
	}

}
