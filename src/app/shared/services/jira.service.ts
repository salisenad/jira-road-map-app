import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JiraService {
  jiraUrl = 'assets/Frontend_project_sample_data.json';

  constructor(private http: HttpClient) {
  }


  getJiraIssues(): Observable<any> {
    return this.http.get<any>(this.jiraUrl).pipe(
      map(
        res => {
          return res;
        },
        catchError((err: any) => {
          return err;
        })
      )
    )
  }


}
