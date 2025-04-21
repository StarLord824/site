// import { Main } from "next/document";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  );
}
