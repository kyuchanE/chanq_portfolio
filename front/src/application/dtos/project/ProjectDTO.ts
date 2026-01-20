import { SkillDTO } from "./SkillDTO";

export type ProjectDTO = {
    id: number;
    type: string;
    name: string;
    children?: ProjectDTO[];
    skills?: SkillDTO[];
    feedback: string;
}