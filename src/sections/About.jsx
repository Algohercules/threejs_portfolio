import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m  Adarsh</p>
              <p className="grid-subtext">
I'm Adarsh Rai, a Computer Science undergraduate at ABES Institute of Technology (CGPA: 8.2) and a Full Stack Developer Intern who believes the best code solves a problem someone can actually feel. During my internship at Exeliq Tech Solutions, I worked across the stack — building responsive interfaces with React and JavaScript, integrating REST APIs, and collaborating through Git/GitHub in a real development workflow with code reviews and debugging sessions.
 
Outside of internships, I build things that make abstract ideas tangible:
 🔹 A Pathfinding & Maze Visualizer (React, TypeScript, Redux Toolkit) that turns algorithms like Dijkstra, A*, and JPS into real-time, interactive animations — deployed live on Vercel.
 🔹 A Student Record Management System (C++) with dual-role authentication, reducing manual record-handling workload for academic use.
 🔹 An ML-based Crash Severity Predictor that translates traffic data into practical, data-driven safety interventions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications

               
🚀 Tech Stack & Expertise

💻 Programming Languages :
 C++
 JavaScript
 TypeScript  
 Python

🎨 Frontend Development
React.js
HTML5 & CSS3

⚙️ Backend Development
Node.js
REST APIs

🗄️ Databases
MongoDB
SQL 

🧠 Computer Science Fundamentals
Data Structures & Algorithms (DSA)
Object-Oriented Programming (OOP) 
System Design (HLD & LLD)

🛠️ Tools & Version Control
Git
GitHub 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'NOIDA(India)', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in NOIDA and open to work from anywhere remotely</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                💙 My Passion for Coding
Coding is more than just writing lines of code for me—it's a way of thinking, creating, and solving real-world problems. 🚀 I genuinely enjoy breaking down complex challenges into simple, efficient, and scalable solutions, whether it's solving Data Structures & Algorithms problems, developing full-stack web applications, or exploring system design concepts.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">adarshrai1903@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
