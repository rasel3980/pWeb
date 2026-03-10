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
}

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/share/1DQrSQLQC4/", label: "Facebook" },
  { icon: <FaGithub />,   href: "https://github.com/rasel3980",               label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rasel80",         label: "LinkedIn" },
];

const CONTACT_DETAILS: ContactDetail[] = [
  { icon: <FaEnvelope className="text-emerald-400" />,    label: "Email",             value: "rkrasel3980@gmail.com",  href: "mailto:rkrasel3980@gmail.com" },
  { icon: <FaPhoneAlt className="text-violet-400" />,     label: "Phone / WhatsApp",  value: "+8801647683980",         href: "tel:+8801647683980"           },
  { icon: <FaMapMarkerAlt className="text-pink-400" />,   label: "Location",          value: "Dhaka, Bangladesh"                                            },
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
          background: "#0d0d1a",
          color: "#e8e8f0",
          confirmButtonColor: "#7effd4",
        });
        form.current?.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          background: "#0d0d1a",
          color: "#e8e8f0",
          confirmButtonColor: "#7effd4",
        });
        console.error("EmailJS error:", error);
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Contact Me</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-violet-400" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          {/* Contact details */}
          <div className="space-y-4">
            {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">Follow me</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a key={label} href={href}
                  target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-lg
                    hover:text-white hover:border-emerald-400/40 hover:bg-emerald-400/5
                    hover:-translate-y-0.5 transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 w-full"
        >
          <form ref={form} onSubmit={sendEmail}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4">

            <div className="space-y-1">
              <label className="text-xs text-gray-500 font-medium">Your Name</label>
              <input type="text" name="name" required placeholder="Rasel Mia"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                  placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-400/50
                  transition-colors duration-200" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500 font-medium">Your Email</label>
              <input type="email" name="email" required placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                  placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-400/50
                  transition-colors duration-200" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500 font-medium">Message</label>
              <textarea name="message" required rows={5} placeholder="Hello, I'd like to work with you..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                  placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-400/50
                  transition-colors duration-200 resize-none" />
            </div>

            <button type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-emerald-400 to-violet-400 text-gray-900
                hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25
                disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
              {sending ? "Sending..." : <><FaPaperPlane /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;