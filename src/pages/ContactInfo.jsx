import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          Swal.fire({
            title: "Thank You!",
            text: "Your Message Send Successfully!",
            icon: "success",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });
          console.log("Error",error);
        }
      );
  };
  return (
    <section id="contact" className="mt-6 md:mt-12">
      <div className="w-11/12 mx-auto">
        <h2 className="font-semibold md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600 text-center md:mb-8 mb-2">
          Contact Me
        </h2>
        <div className="md:flex md:items-center grid gap-5 md:gap-28">
          <div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1DQrSQLQC4/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary text-lg"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/rasel3980"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-neutral text-lg"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rasel80"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary text-lg"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className=" flex flex-col justify-start mt-6 space-y-3">
              <p className="flex items-center gap-3 md:text-lg">
                <FaEnvelope className="text-blue-600 md:text-xl" />
                <span className="text-black">
                  <strong>Email:</strong> rkrasel3980@gmail.com
                </span>
              </p>

              <p className="flex items-center gap-3 md:text-lg">
                <FaPhoneAlt className="text-green-600 md:text-xl" />
                <span className="text-black">
                  <strong>Phone or WhatsApp:</strong> +8801647683980
                </span>
              </p>

              <p className="flex items-center gap-3 md:text-lg">
                <FaMapMarkerAlt className="text-red-600 md:text-xl" />
                <span className="text-black">
                  <strong>Location:</strong> Dhaka, Bangladesh
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="md:w-[500px] bg-[#91e0d0] p-3 rounded-2xl hover: md:shadow-xl hover:shadow-lg hover:shadow-red-500">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="border p-2 rounded text-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="border p-2 rounded text-black"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="border p-2 text-black rounded h-32"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
