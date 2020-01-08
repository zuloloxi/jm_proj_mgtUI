import { Review } from './review';
import { Document } from './document';


// export enum Followup {
//   STANDARD,
//   LIGHT,
//   ENFORCED
// }
export class Project {
  id: number;
  code: string;
  name: string;
  method: string;
  followup: string;
  documents: Document[];
  reviews: Review[];
}

