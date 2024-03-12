import { SignUp } from "@/Components/Authentication/SignUp";
import { DashboardLeft } from "@/Components/DashboardLeft";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Menu } from "@/Components/Header/Menu";
import { LeftButton } from "@/Components/Leftbutton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header />
      <Menu />


      <LeftButton />

      <Footer />
    </main>
  );
}
