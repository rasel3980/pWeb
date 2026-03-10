import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0F172A", color: "#F8FAFC" }}>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)" }} />
        <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.08), transparent 70%)" }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #38BDF8 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <header className="sticky top-0 z-50 backdrop-blur-lg"
        style={{ backgroundColor: "rgba(15,23,42,0.85)", borderBottom: "1px solid rgba(56,189,248,0.1)" }}>
        <Navbar />
      </header>
      <main className="flex-1 w-11/12 max-w-6xl mx-auto py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;