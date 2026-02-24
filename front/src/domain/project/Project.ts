import { Content } from "./Content";

export type Project = {
  id: number;
  title: string;
  type: string;
  contents: Content[];
  start: string;
  finish: string;
};
