import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import {
  FaEnvelope, FaFacebook, FaGithub,
  FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane,
} from "react-icons/fa";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  brandColor: string;
}

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1DQrSQLQC4/", label: "Facebook", brandColor: "#1877F2" },
  { icon: <FaGithub />,   href: "https://github.com/rasel3980",               label: "GitHub",   brandColor: "#ffffff" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rasel80",         label: "LinkedIn", brandColor: "#0A66C2" },
];

const CONTACT_DETAILS: ContactDetail[] = [
  { icon: <FaEnvelope />,    label: "Email",            value: "rkrasel3980@gmail.com", href: "mailto:rkrasel3980@gmail.com" },
  { icon: <FaPhoneAlt />,    label: "Phone / WhatsApp", value: "+8801647683980",        href: "tel:+8801647683980"           },
  { icon: <FaMapMarkerAlt />,label: "Location",         value: "Dhaka, Bangladesh"                                          },
];

const ContactInfo: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        Swal.fire({
          title: "Thank You!",
          text: "Your message was sent successfully!",
          icon: "success",
          background: "#0F172A",
          color: "#F8FAFC",
          confirmButtonColor: "#38BDF8",
        });
        form.current?.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          background: "#0F172A",
          color: "#F8FAFC",
          confirmButtonColor: "#38BDF8",
        });
        console.error("EmailJS error:", error);
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: "#38BDF8" }}>
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "#F8FAFC" }}>
          Contact Me
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full"
          style={{ background: "linear-gradient(90deg, #38BDF8, #14B8A6)" }} />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8">
          <div className="space-y-4">
            {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
              <div key={label}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ backgroundColor: "#1E293B", border: "1px solid #334155" }}>
                <span className="text-xl" style={{ color: "#38BDF8" }}>{icon}</span>
                <div>
                  <p className="text-xs font-medium" style={{ color: "#475569" }}>{label}</p>
                  {href ? (
                    <a href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#CBD5E1" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#38BDF8")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#CBD5E1")}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: "#CBD5E1" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#475569" }}>
              Follow me
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label, brandColor }) => (
                <a key={label} href={href}
                  target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-3 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #334155",
                    color: "#CBD5E1",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = brandColor;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = brandColor;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#334155";
                  }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 w-full">

          <form ref={form} onSubmit={sendEmail}
            className="p-6 rounded-2xl space-y-4"
            style={{ backgroundColor: "#1E293B", border: "1px solid #334155" }}>

            <div className="space-y-1">
              <label className="text-xs font-medium" style={{ color: "#475569" }}>Your Name</label>
              <input type="text" name="name" required placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200
                  focus:outline-none placeholder-gray-600"
                style={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  color: "#F8FAFC",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "#334155")} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium" style={{ color: "#475569" }}>Your Email</label>
              <input type="email" name="email" required placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200
                  focus:outline-none placeholder-gray-600"
                style={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  color: "#F8FAFC",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "#334155")} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium" style={{ color: "#475569" }}>Message</label>
              <textarea name="message" required rows={5}
                placeholder="Hello, I'd like to work with you..."
                className="w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200
                  focus:outline-none placeholder-gray-600 resize-none"
                style={{
                  backgroundColor: "#0F172A",
                  border: "1px solid #334155",
                  color: "#F8FAFC",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)")}
                onBlur={e => (e.currentTarget.style.borderColor = "#334155")} />
            </div>

            <button type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                font-semibold text-sm transition-all duration-200
                hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #38BDF8, #14B8A6)",
                color: "#0F172A",
                boxShadow: sending ? "none" : "0 4px 20px rgba(56,189,248,0.25)",
              }}>
              {sending ? "Sending..." : <><FaPaperPlane /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;