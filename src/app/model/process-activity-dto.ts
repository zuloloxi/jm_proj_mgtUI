import { ArtifactDTO } from './artifact-dto';

export class ProcessActivityDTO {
  id: number;
  name: string;
  artifactDTOList: ArtifactDTO[];
}
