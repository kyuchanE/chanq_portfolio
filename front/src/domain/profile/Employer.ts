import { Project } from "../project/Project"

export type Employer = {
    name: string
    startDate: string
    endDate: string
    projects: Project[]
}