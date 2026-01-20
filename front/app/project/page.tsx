import { ProjectMainSection } from "@/src/presentation/components/project/ProjectMainSection";

export default function Project() {

    return (
        <div className="flex flex-col h-screen min-w-screen bg-white font-sans overflow-hidden">
            {/* Top Fixed */}
            <header className="h-[35px] min-w-screen shrink-0 bg-content_black_3 border-b border-b-content_black_0">

            </header>
            {/* Middle Scrollable */}
            <main className="flex-1 overflow-y-auto min-h-0">
                <ProjectMainSection />
            </main>
            {/* Bottom Fixed */}
            <footer className="h-[25px] min-w-screen shrink-0 bg-content_black_3 border-t border-t-content_black_0">

            </footer>
        </div>
    )
}

