import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskCard} from "../../../../shared/models/task-card";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<CardDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public card: TaskCard) {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  getEstimationValue = (originalEstimation: number) => originalEstimation / 144000 + ' Week(s)';

  getChipColor = (label: string) => {
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
