import { useState, useEffect, useCallback } from "react";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

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
    <nav className={`w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" onClick={() => handleNav("/")}
          className="font-extrabold text-2xl text-white tracking-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">&lt;</span>
          Rasel
          <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => handleNav(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${active === id
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
              bg-gradient-to-r from-emerald-400 to-violet-400 text-gray-900
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25
              transition-all duration-200">
            Contact →
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-white/10 bg-white/5">
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 mt-2" : "max-h-0"}`}>
        <ul className="mx-6 p-3 rounded-xl border border-white/10 bg-gray-950/95 backdrop-blur-md list-none flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => handleNav(id)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                  ${active === id
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block mt-1 px-4 py-3 rounded-lg text-sm font-semibold text-center
                bg-gradient-to-r from-emerald-400 to-violet-400 text-gray-900">
              Contact Me →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;