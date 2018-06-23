import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { QuestionService } from './shared-components/question.service';
import { Ques } from './shared-components/ques';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  // MatPaginator Inputs
  constructor(private _questionSerice: QuestionService) {
    this._questionSerice = _questionSerice;
  }
  private questions: Ques[] = [];
  private dataSource: any;
  length: any;
  pageSize = 5;
  pageSizeOptions = [5, 10];
  pageNumber = 0 * this.pageSize;
  pageIndex = 0;

  //question = new Array(this.pageSize);


  // MatPaginator Output
  pageEvent: PageEvent;
  ngOnInit() {

    this._questionSerice.fetchQuestion().then(ques => {
      this.dataSource = ques;
      // this.length = Math.floor(this.questions.length / this.pageSize);
      this.length = ques.length;
      var i;
      for (i = this.pageNumber; i < this.pageSize; i++) {
        this.questions[i] = this.dataSource[i];
      }
    }
    )
  }

  public handlePagination(event) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageNumber;
    this.pageSizeOptions = event.pageSizeOptions;
    this.pageIndex = event.pageIndex;
    this.questions = [];
    var i;
    var j = 0;
    this.pageNumber = this.pageIndex * this.pageSize;
    for (i = this.pageIndex * this.pageSize; i < (this.pageIndex + 1) * this.pageSize; i++) {

      if (this.dataSource[i]) {
        this.questions[j] = this.dataSource[i];
        j++;
      }
    }

  }


}
