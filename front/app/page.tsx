import { LiquidGlassModal } from "@/src/presentation/components/home/LiquidGlassModal";
import background from "../public/images/bg_test.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-white font-sans">

      <main className="relative min-h-screen w-full ">
        {/* Background */}
        <Image src={background} alt="background" className="min-w-full min-h-full" />
        {/* Liquid View */}
        <LiquidGlassModal open={true} />
      </main>

    </div>
  );
}
