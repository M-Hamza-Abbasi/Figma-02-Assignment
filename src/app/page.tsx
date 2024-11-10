import HeaderPage from "./component/header/header";
import HeroPage from "./component/Hero/hero";

export default function Home() {
  return (
    <div className="h-screen">
      <HeaderPage/>
      <HeroPage/>
      </div>
    );
}
