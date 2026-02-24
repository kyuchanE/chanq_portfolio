'use client';

import type { ProjectCardVm } from "../../view-models/project/ProjectCardVm";

type ProjectListProps = {
    projectList: ProjectCardVm[];
    studyList: ProjectCardVm[];
}

export function ProjectListClient({ projectList, studyList }: ProjectListProps) {

    return (
        <div className="flex flex-col w-full">

        </div>
    )
}