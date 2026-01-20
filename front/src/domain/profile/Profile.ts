import { Employer } from "./Employer"

export type Profile = {
    name: string
    birthYear: number
    info: string
    image?: string
    employers?: Employer[]
}