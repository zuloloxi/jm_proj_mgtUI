import { ProcessActivity } from './process-activity';


export class Process {
  id: number;
  displayName: string;
  processType: string;
  followUP: string;
  processActivities: ProcessActivity[];
}
