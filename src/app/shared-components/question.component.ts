import { Component, Input, ElementRef } from '@angular/core';

import { PageEvent } from '@angular/material';
import { element } from 'protractor';


@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']

})
export class QuestionComponent {

	@Input() question: any;
	answer: string = "";
	array: any;
	selectedValue: string;
	ansSelected: string;
	indexValue: number = null;


	checkAns(selectedOption, index): void {

		this.ansSelected = selectedOption;
		this.selectedValue = 'selected';
		this.indexValue = index;
		switch (this.question.answer) {
			case "A":
				this.answer = this.question.options[0];
				break;
			case "B":
				this.answer = this.question.options[1];
				break;
			case "C":
				this.answer = this.question.options[2];
				break;
			case "D":
				this.answer = this.question.options[3];
				break;
		}
	}
}
