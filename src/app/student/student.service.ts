import {Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs'
import {Student} from './student';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService{

  constructor(private _httpService: Http){}

  getAllStudents(): Observable<Student[]>{
    return this._httpService.get("http://localhost:8050/studentcatalog/api/student").map((response: Response) => response.json()).catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error);
  }
}
