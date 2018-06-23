import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ques } from './ques';




@Injectable()
export class QuestionService {
    private questions: Ques[] = [];
    constructor(private _http: Http) {
        this._http = _http;
    }

    // fetchQuestion() {
    /*this._http.get('http://localhost:8081/question/gk')
        .subscribe(res => this.data = res.json());
    return this.data;*/


    // }
    // }
    fetchQuestion(): Promise<Ques[]> {
        return this._http.get('http://localhost:8081/question/gk').toPromise()
            .then(res => this.questions = res.json())
    }
}