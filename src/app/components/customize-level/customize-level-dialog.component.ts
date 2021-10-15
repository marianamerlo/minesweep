import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "src/app/app.component";

@Component({
	selector: 'customize-level-dialog',
	templateUrl: 'customize-level-dialog.component.html',
	styleUrls: ['./customize-level-dialog.component.scss']
})
export class CustomizeLevelDialog implements OnInit{

	formGroup: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<CustomizeLevelDialog>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData,
		private formBuilder: FormBuilder) { }

	ngOnInit() {		
		this.formGroup = this.formBuilder.group({
			cols: ['', [Validators.required, Validators.min(1)]],
			rows: ['', [Validators.required, Validators.min(1)]],
			mineNumber: ['', [Validators.required, Validators.min(1)]]			   
		});
	}
	onCancelClick(): void {
		this.dialogRef.close();
	}

	onSubmitClick(): void{

	}

}