import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private baseUrl: string = "https://herokuproprep-277c1e0acbad.herokuapp.com/api/Result/"
  constructor(private http: HttpClient) { }

  GetResult(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }
}
