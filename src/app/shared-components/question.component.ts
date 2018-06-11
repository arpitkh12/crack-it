import { Component } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent {
    options: Array<String> = ['a', 'b', 'c'];
	 answer: string = 'a';
	 correct: boolean;
	 selectedValue : string;
	  checkAns(e: string): void   
	  {  
			this.selectedValue = e;
			this.selectedValue = "selected";
			if(e == this.answer)
			{
				this.correct = true;	
				
			}
			else
			{
				this.correct = false;	
			}
			  
	  }  
}
