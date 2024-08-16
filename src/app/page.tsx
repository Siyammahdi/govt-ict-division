import Board from "./Components/Home/Board";
import Display from "./Components/Home/Display";
import Hero from "./Components/Home/Hero";
import InCharge from "./Components/Home/InCharge";
import InfoCards from "./Components/Home/InfoCards";

export default function Home() {
  return (
    <div className="dark:bg-gradient-to-r from-[#042f2e] to-[#022c22]">
      <Hero />
      <Board />
      <InCharge />
      <InfoCards />
      <Display />
    </div>
  );
}
