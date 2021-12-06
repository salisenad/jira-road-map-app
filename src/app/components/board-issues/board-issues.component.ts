import {Component, OnInit} from '@angular/core';
import {JiraService} from "../../shared/services/jira.service";
import {TaskCard} from "../../shared/models/task-card";
import * as _ from 'lodash';

@Component({
  selector: 'app-board-issues',
  templateUrl: './board-issues.component.html',
  styleUrls: ['./board-issues.component.scss']
})
export class BoardIssuesComponent implements OnInit {
  boardRecords: Record<any, TaskCard[]> = {};
  lowestDueDate: Date = new Date();

  constructor(private jiraService: JiraService) {
  }

  ngOnInit(): void {
    this.getJiraIssues();
  }


  getJiraIssues = () => {
    this.jiraService.getJiraIssues().subscribe(
      (res: any) => {
        let allLabelsArray = _.map(res.issues, 'fields.labels');
        let uniqueLabels = _.uniqWith(_.flatten(allLabelsArray), _.isEqual);
        let rows: { [label: string]: any[] } = {};
        uniqueLabels.forEach((element: any) => {
          rows[element] = [];
        });
        this.getUniqueLabels(res, uniqueLabels, rows);
        this.boardRecords = rows;
        this.getLowestDueDate(res);
      })
  };

  getLowestDueDate = (res: any) => {
    let dates: any = _.map(res.issues, 'fields.duedate');
    this.lowestDueDate = dates.reduce(
      (a: Date, b: Date) => a < b ? a : b);
  };

  private getUniqueLabels = (res: any, uniqueLabels: unknown[], rows: { [p: string]: any[] }) => {
    res.issues?.forEach((issue: any) => {
      uniqueLabels.forEach((element: any) => {
        if (rows[element] === undefined) rows[element];
        if (issue.fields?.labels.includes(element)) {
          rows[element].push(issue);
        }
      });
    });
  };

}
