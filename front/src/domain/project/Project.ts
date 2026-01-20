import { Skill } from "./Skill";

export type Project = {
    id: number;
    type: ProjectType;
    name: string;
    children?: Project[];
    skills?: Skill[];
    feedback: string;
}

export type ProjectType = "folder" | "file"

function isProjectType(value: string): value is ProjectType {
    return value === "folder" || value === "file";
}

export function parseProjectType(value: string): ProjectType | null {
    return isProjectType(value) ? value : null;
}