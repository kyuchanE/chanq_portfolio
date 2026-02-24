import { makeGetProjectsUseCase, makeGetStudyUseCase } from "@/src/infrastructure/di/projectUseCases";
import { mapToProjectCardViewModel } from "../../view-models/project/mappers/projectCardVmMapper";
import { ProjectListClient } from "./ProjectListClient";


export async function ProjectListServer() {
    const projectUseCases = makeGetProjectsUseCase();
    const projects = await projectUseCases.execute();
    const projectCards = projects.map(mapToProjectCardViewModel);

    const studyUseCase = makeGetStudyUseCase();
    const study = await studyUseCase.execute();
    const studyCards = study.map(mapToProjectCardViewModel);

    return <ProjectListClient projectList={projectCards} studyList={studyCards} />
}