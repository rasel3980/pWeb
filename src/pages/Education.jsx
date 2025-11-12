
const Education = () => {
    return (
         <section className="py-10 ">
        <div className="px-6 lg:px-0">
          <h2 className="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-pink-600 text-center mb-12">
            My Educational Qualifications
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8">
            <div className="flex flex-col md:flex-row rounded-lg bg-[#91e0d0] hover:shadow-2xl hover:shadow-red-500 items-start gap-6 md:gap-12 mb-10">
              <div className="p-3">
                <h3 className="text-2xl font-bold text-gray-800">Diploma in Computer Science (8th Semester)</h3>
                <p className="text-lg font-bold text-gray-700">Moulvibazar Polytechnic Institute</p>
                <p className="text-sm text-gray-500">2021 - Present</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800">
                  <li>Currently in the 8th semester, with a focus on **Web Development** and **Software Engineering**.</li>
                  <li>Gaining hands-on experience with programming languages like Java, JavaScript,C etc.</li>
                  <li>Hands-on experience with building dynamic websites, responsive designs, and interactive web applications.</li>
                  <li>Completed projects using full-stack development techniques, focusing on front-end and back-end integration.</li>
                  <li>Currently working on personal web development projects using **React with Next.Js** for front-end and **Node.js** for back-end.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row rounded-lg bg-[#91e0d0] hover:shadow-2xl hover:shadow-red-500  items-start gap-6 md:gap-12 mb-10">
              <div className="md:h-[350px] p-3">
                <h3 className="text-2xl font-bold text-gray-800">Secondary School Certificate (SSC)</h3>
                <p className="text-lg font-bold text-gray-700">Al-Amin High School</p>
                <p className="text-sm text-gray-500">2019 - 2020</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800">
                  <li>Major Subjects: **Mathematics**, **English**, and **Science**.</li>
                  <li>Achieved an overall score of 90%, with a strong understanding of logical reasoning and mathematics.</li>
                  <li>Involved in extracurricular activities like coding competitions and school website development projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Education;