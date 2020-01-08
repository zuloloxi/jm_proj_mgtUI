import { ProcessActivityDTO } from './process-activity-dto';


export class ProcessDTO {
  id: number;
  displayName: string;
  processType: string;
  followUP: string;
  processActivityDTOList: ProcessActivityDTO[];
}
