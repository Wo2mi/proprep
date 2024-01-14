import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
  private baseUrl: string = "https://herokuproprep-277c1e0acbad.herokuapp.com/api/TestResult/DTO/"
  constructor(private http: HttpClient) { }
  GetResult(id: number){
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }
}
