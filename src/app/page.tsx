// import { Main } from "next/document";
import Header from "../components/Header/Header";
import MainSection from "../components/Main/MainSection";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SiderBar";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <SideBar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
