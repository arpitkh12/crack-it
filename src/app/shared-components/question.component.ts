import { Component } from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent {
    options: Array<String> = ['a', 'b', 'c'];
    selectedValue: number;
}
