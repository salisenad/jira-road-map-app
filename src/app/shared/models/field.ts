import {IssueType} from "./issue-type";

export interface Field {
    duedate: Date;
    timeoriginalestimate: number;
    labels: string[];
    project: any;
    status: any;
    summary: string;
    description: string;
    issuetype: IssueType;
}
