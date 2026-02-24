
import { makeGetProjectsUseCase } from "@/src/infrastructure/di/projectUseCases";
import { mapToProjectCardViewModel } from "@/src/presentation/view-models/project/mappers/projectCardVmMapper";

export default async function ProjectPage() {
    try {
        const useCase = makeGetProjectsUseCase();
        const projects = await useCase.execute();
        const projectCards = projects.map(mapToProjectCardViewModel);

        return (
            <div className="flex min-h-screen min-w-screen flex-col bg-white p-6 font-sans">
                <h1 className="mb-6 text-2xl font-bold text-content_black_2">Projects</h1>
            </div>
        );
    } catch {
        return (
            <div className="flex min-h-screen min-w-screen flex-col bg-white p-6 font-sans">
                <h1 className="text-2xl font-bold text-content_black_2">Projects</h1>
                <p className="mt-4 text-sm text-red-600">프로젝트 데이터를 불러오지 못했습니다.</p>
            </div>
        );
    }
}
