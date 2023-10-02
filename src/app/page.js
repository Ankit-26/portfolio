import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";

export default function App() {
  return (
    <main className="min-h-screen pb-32">
      <Header />
      <div className="p-1"></div>
      <Home />
      <div className="p-1"></div>
      <About />
      <div className="p-1"></div>
      <Portfolio />
      <div className="p-1"></div>
      <Contact />
    </main>
  );
}
