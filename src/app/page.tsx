import Board from "./Components/Home/Board";
import Display from "./Components/Home/Display";
import Hero from "./Components/Home/Hero";
import InCharge from "./Components/Home/InCharge";
import InfoCards from "./Components/Home/InfoCards";

export default function Home() {
  return (
    <div className="dark:bg-slate-00">
      <Hero />
      <Board />
      <InCharge />
      <InfoCards />
      <Display />
    </div>
  );
}
