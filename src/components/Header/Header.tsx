import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { Link } from "lucide-react";

const Header = () => {
  const tabs = [
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Courseworks",
      link: "/courseworks",
    },
  ];
  return (
    <header className="flex items-center justify-around w-full h-1/9 border-b-2 border-white/20 text-xl font-semibold">
      <div className="flex items-center justify-around text-3xl font-bold">
        <div>
          <Image
            src="https://wallpapercave.com/wp/wp2516344.jpg"
            alt="profilePic"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div>StarLord.dev</div>
      </div>
      <div className="flex gap-3 text-xl font-semibold text-neutral-500">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center hover:text-white hover:bg-neutral-800 rounded-lg h-12 w-40 p-2 transition ease-in"
            >
              <Link href={tab.link}>{tab.title}</Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-10">
        <SearchBar />
        <div>
          <ModeToggle />
        </div>
        <div>Options</div>
      </div>
    </header>
  );
};

export default Header;
