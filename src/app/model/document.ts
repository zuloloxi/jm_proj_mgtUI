import { Tag } from './tag';
import { Project } from './project';

export class Document {
  id: number;
  name: string;
  tag: Tag;
  project: Project = new Project();
}
