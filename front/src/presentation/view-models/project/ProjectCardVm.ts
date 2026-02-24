export type ProjectCardVm = {
  title: string;
  contents: ProjectCardContentVm[];
  start: string;
  finish: string;
};

export type ProjectCardContentVm = {
  order: number;
  type: string;
  imageUrl?: string;
  contentStr?: string;
}
