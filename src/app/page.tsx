import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen p-24 font-light gap-x-12">
      {/* header */}
      <Header />
      {/* content */}
      <div className="w-full flex flex-col gap-y-16 overflow-scroll">
        <About />
        <Work />
      </div>
    </main>
  );
}
