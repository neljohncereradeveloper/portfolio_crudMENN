import { ReactElement } from "react";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 md:p-10 p-5 grid grid-cols-3 gap-10">
        {children}
      </main>
    </div>
  );
}
