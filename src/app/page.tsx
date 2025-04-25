// import { Main } from "next/document";
import Header from "./component/Header";
import MainSection from "./component/MainSection";
import Footer from "./component/Footer";
import SideBar from "./component/SiderBar";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <SideBar/>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  );
}
