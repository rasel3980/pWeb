import { useState, useEffect, useCallback } from "react";

interface NavLink { label: string; href: string; id: string; }

const NAV_LINKS: NavLink[] = [
  { label: "Home",    href: "/",        id: "/"       },
  { label: "Skills",  href: "#skills",  id: "skills"  },
  { label: "Project", href: "#project", id: "project" },
  { label: "About",   href: "#about",   id: "about"   },
];

const Navbar: React.FC = () => {
  const [active, setActive]     = useState<string>("/");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = useCallback((id: string) => {
    setActive(id);
    setMenuOpen(false);
  }, []);

  return (
    <nav className={`w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" onClick={() => handleNav("/")}
          className="font-extrabold text-2xl tracking-tight"
          style={{ color: "#F8FAFC" }}>
          <span style={{ color: "#38BDF8" }}>&lt;</span>
          Rasel
          <span style={{ color: "#38BDF8" }}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a href={href} onClick={() => handleNav(id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: active === id ? "#38BDF8" : "#94A3B8",
                  backgroundColor: active === id ? "rgba(56,189,248,0.08)" : "transparent",
                }}
                onMouseEnter={e => { if (active !== id) (e.currentTarget as HTMLAnchorElement).style.color = "#F8FAFC"; }}
                onMouseLeave={e => { if (active !== id) (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
              transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #38BDF8, #14B8A6)",
              color: "#0F172A",
              boxShadow: "0 4px 20px rgba(56,189,248,0.25)",
            }}>
            Contact →
          </a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors duration-200"
            style={{ border: "1px solid rgba(56,189,248,0.2)", backgroundColor: "rgba(56,189,248,0.05)" }}>
            <span className={`block h-0.5 w-5 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "#F8FAFC" }} />
            <span className={`block h-0.5 w-5 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#F8FAFC" }} />
            <span className={`block h-0.5 w-5 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "#F8FAFC" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 mt-2" : "max-h-0"}`}>
        <ul className="mx-6 p-3 rounded-xl flex flex-col gap-1 list-none"
          style={{ backgroundColor: "#1E293B", border: "1px solid rgba(56,189,248,0.1)" }}>
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a href={href} onClick={() => handleNav(id)}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: active === id ? "#38BDF8" : "#94A3B8",
                  backgroundColor: active === id ? "rgba(56,189,248,0.08)" : "transparent" }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block mt-1 px-4 py-3 rounded-lg text-sm font-semibold text-center"
              style={{ background: "linear-gradient(135deg, #38BDF8, #14B8A6)", color: "#0F172A" }}>
              Contact Me →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;