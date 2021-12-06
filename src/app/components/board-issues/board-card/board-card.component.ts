import {Component, Input, OnChanges} from '@angular/core';
import {TaskCard} from "../../../shared/models/task-card";
import {MatDialog} from "@angular/material/dialog";
import {CardDetailsComponent} from "./card-details/card-details.component";

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnChanges {

  @Input() card: TaskCard = {
    id: '0',
    key: '0',
    fields: {
      duedate: new Date(),
      labels: [],
      project: '',
      status: '',
      timeoriginalestimate: 0,
      summary: '',
      description: '',
      issuetype: {
        iconUrl: '',
        name: ''
      }
    },
    rowNumber: 0,
  };

  @Input() minDueDate: Date = new Date();
  distanceFromMinDueDate = 0;

  constructor(public dialog: MatDialog) {
  }


  ngOnChanges(): void {
    this.getDistance();
  }


  getDistance() {
    let timestamp1 = new Date(this.card.fields.duedate).getTime();
    let timestamp2 = new Date(this.minDueDate).getTime();
    let diff = timestamp1 - timestamp2;
    this.distanceFromMinDueDate = Math.floor(diff / 10000000);
  }

  getCardWidth = (card: TaskCard) => card.fields.timeoriginalestimate &&
  card.fields.timeoriginalestimate / 1440 > 200 ?
    card.fields.timeoriginalestimate / 1440 : 200;

  getTopMargin(card: TaskCard) {
    return card.rowNumber ? card.rowNumber * 150 : 13;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardDetailsComponent, {
      width: '80%',
      data: this.card
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getBackgroundColor = (label: string) => {
    let color = '#e0cfc2';
    const colorLabel = label.toLocaleLowerCase();
    if (colorLabel !== 'bugs') {
      if (colorLabel === 'backend') {
        return '#a3c3c6';
      } else if (colorLabel === 'roadmap') {
        return '#c2b0be';
      } else if (colorLabel === 'eva') {
        return '#edaf87';
      } else if (colorLabel === 'revenue') {
        return '#f8e3d5';
      } else {
      }
    } else {
      return '#c8381a';
    }
    return color;
  };

}
