import { HomeInfo } from "@/src/presentation/components/home/HomeInfo";
import { ProjectListServer } from "@/src/presentation/components/home/ProjectListServer";
import { Topbar } from "@/src/presentation/components/Topbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-black font-sans">

      <Topbar className="h-[50px] w-full" />

      <HomeInfo className="w-full" />

      <ProjectListServer />

    </main>
  );
}
