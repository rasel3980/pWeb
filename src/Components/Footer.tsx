import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  brandColor: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/share/1DQrSQLQC4/",
    label: "Facebook",
    brandColor: "#1877F2",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/rasel3980",
    label: "GitHub",
    brandColor: "#ffffff",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/rasel80",
    label: "LinkedIn",
    brandColor: "#0A66C2",
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0B1120",
        borderTop: "1px solid rgba(56,189,248,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-3">
          <a
            href="/"
            className="font-extrabold text-2xl tracking-tight w-fit"
            style={{
              background: "linear-gradient(90deg, #38BDF8, #14B8A6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rasel
          </a>
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#38BDF8" }}
          >
            MERN Stack Developer
          </p>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "#475569" }}
          >
            Building fast, scalable & beautiful web experiences.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#334155" }}
          >
            Navigation
          </h3>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm w-fit transition-colors duration-200"
                style={{ color: "#64748B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <h3
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#334155" }}
          >
            Connect
          </h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon, href, label, brandColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#1E293B",
                  border: "1px solid #334155",
                  color: "#CBD5E1",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    brandColor;
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    brandColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#CBD5E1";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "#334155";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(56,189,248,0.05)" }}>
        <p className="text-center text-xs py-5" style={{ color: "#334155" }}>
          © {new Date().getFullYear()}{" "}
          <span
            className="font-semibold"
            style={{
              background: "linear-gradient(90deg, #38BDF8, #14B8A6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rasel Mia
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
