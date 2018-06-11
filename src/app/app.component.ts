import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageNumber = 0 * this.pageSize;
  question = new Array(this.pageSize);

  // MatPaginator Output
  pageEvent: PageEvent;


}
