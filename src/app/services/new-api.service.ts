import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AllPokeman } from '../models/pokeman';

@Injectable({
  providedIn: 'root'
})
export class NewApiService {
  apiEndPint_URL: string = "https://cdn.theprojectfactory.com/pokemon/get.php";

  constructor(private httpClient: HttpClient) {}

  getDate(): Observable<AllPokeman> {
    return this.httpClient.get<AllPokeman>(this.apiEndPint_URL).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error:any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}

