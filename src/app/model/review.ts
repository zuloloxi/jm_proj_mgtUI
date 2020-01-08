import { Project } from './project';
import { Reviewtype } from './reviewtype';

export class Review {
  id: number;
  name: string;
  reviewtype: Reviewtype;
  project: Project;
}
