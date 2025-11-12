import Lottie from "lottie-react";
import animation from "../assets/animation/Animation - 1742809656451.json";

const About = () => {
  return (
    <section id="about" className="py-10 px-4 max-w-6xl mx-auto">
      <h3 className="text-center font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600 mb-6">About Me</h3>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1 text-justify space-y-4">
          <p className="text-black">
            Hello, I’m <strong>Rasel Mia</strong>, an enthusiastic web developer skilled in
            building modern and scalable web applications. I have worked with various web
            technologies and am currently learning <strong>Next.js</strong> and{" "}
            <strong>Redux</strong>.
          </p>

          <p className="text-black">
            <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js
            <br />
            <strong>Backend:</strong> Node.js, Express.js, MongoDB
            <br />
            <strong>Tools & Platforms:</strong> Firebase, Surge, Vercel, Netlify, GitHub
            <br />
            <strong>Additional Libraries:</strong> Tanstack Query, Axios
          </p>

          <p>
            I am passionate about creating web applications that enhance user experience and
            functionality. My career goal is to continually enhance my technical skills and
            expertise in web development.
          </p>

          <p>
            If you would like to learn more about my work or collaborate on a project, feel free to
            email me at <a className="text-blue-600 underline" href="mailto:rkrasel@gmail.com">rkrasel3980@gmail.com</a>.
          </p>
        </div>
        <div className="flex-1 max-w-sm">
          <Lottie className="w-full h-auto" animationData={animation} />
        </div>
      </div>
    </section>
  );
};

export default About;
