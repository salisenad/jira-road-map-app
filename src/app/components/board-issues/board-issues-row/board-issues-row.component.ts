import {Component, Input, OnInit} from '@angular/core';
import {TaskCard} from "../../../shared/models/task-card";

@Component({
  selector: 'app-board-issues-row',
  templateUrl: './board-issues-row.component.html',
  styleUrls: ['./board-issues-row.component.scss']
})
export class BoardIssuesRowComponent implements OnInit {

  @Input() taskCards : TaskCard[] = [];
  @Input() cardText ='';
  @Input() lowestDueDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.getAndCalculateRows(this.taskCards);
    this.getRowHeight(this.taskCards);
  }


  getRowHeight(cards: TaskCard[]) {
    let maxRowNumber = 0;
    cards.map((card:TaskCard) => {
      if(card.rowNumber&&card.rowNumber>maxRowNumber)
        maxRowNumber = card.rowNumber;
    });
    return maxRowNumber * 50 + 50;
  }


  getAndCalculateRows(taskCards: TaskCard[]) {
    taskCards.sort(function(a, b) {
      let firstDueDate = new Date(a.fields.duedate);
      let secondDueDate = new Date(b.fields.duedate);
      return firstDueDate.getTime() - secondDueDate.getTime();
    });
    for (let i1 = 0; i1 < taskCards.length; i1++){
      let i = taskCards[i1];
      let index = taskCards.indexOf(i)
      if(index ===0  ) continue;
      let cardDueDate = this.parseDate(taskCards[index].fields.duedate);
      let lastDueDate = new Date(
        this.parseDate(taskCards[index-1].fields.duedate)
        .getTime() +taskCards[index-1].fields.timeoriginalestimate
      );
      if(cardDueDate<lastDueDate) {
        if(!taskCards[index - 1].rowNumber) taskCards[index - 1].rowNumber = 1;
        i.rowNumber= taskCards[index - 1].rowNumber + 1;
      }
    }
  }

  parseDate(input:any) {
    let parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]);
  }

}
