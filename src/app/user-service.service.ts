import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }
  addUser(user : User){
    return this.http.post("http://localhost:3000/add-user",user)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
