import type { Project } from "@/src/domain/project/Project";
import type { ProjectCardVm } from "../ProjectCardVm";

export function mapToProjectCardViewModel(
    project: Project,
): ProjectCardVm {
    return {
        title: project.title,
        contents: [...project.contents]
            .sort((a, b) => a.order - b.order)
            .map((content) => ({
                order: content.order,
                type: content.type,
                imageUrl: content.imageUrl,
                contentStr: content.contentStr,
            })),
        start: project.start,
        finish: project.finish,
    };
}