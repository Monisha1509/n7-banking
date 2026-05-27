import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import CoreBanking from "./components/CoreBanking";
import Ticker from "./components/Ticker";
import DigitalBanking from "./components/DigitalBanking";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <CoreBanking />
      <Ticker />
      <DigitalBanking />
      <Insights />
      <Footer />
    </main>
  );
}
