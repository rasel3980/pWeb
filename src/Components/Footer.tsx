import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Project",  href: "#project" },
  { label: "Skills",   href: "#skills"  },
  { label: "About Me", href: "#about"   },
  { label: "Contact",  href: "#contact" },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1DQrSQLQC4/", label: "Facebook" },
  { icon: <FaGithub />,   href: "https://github.com/rasel3980",               label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rasel80",         label: "LinkedIn" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <a href="/" className="font-extrabold text-2xl text-white tracking-tight w-fit">
            <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">&lt;</span>
            Rasel
            <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">/&gt;</span>
          </a>
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
            MERN Stack Developer
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Building fast, scalable & beautiful web experiences.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-600">Navigation</h3>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-widest uppercase text-gray-600">Connect</h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <a key={label} href={href}
                target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400
                  hover:text-white hover:border-emerald-400/40 hover:bg-emerald-400/5
                  transition-all duration-200 text-lg">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <p className="text-center text-xs text-gray-600 py-5">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent font-semibold">
            Rasel Mia
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;