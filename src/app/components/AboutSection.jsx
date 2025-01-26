"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none grid grid-cols-3 gap-4">
        <li className="flex flex-col items-center">
          <Image src="/images/node.svg" alt="Node.js" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Node.js</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/express.svg" alt="Express" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Express</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/mysql.svg" alt="MySQL" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">MySQL</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/sqlite.svg" alt="SQLite" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">SQLite</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/js.svg" alt="JavaScript" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">JavaScript</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/react.svg" alt="React" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">React</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/python.png" alt="Python" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Python</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/c++.png" alt="C++" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">C++</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/html.svg" alt="HTML" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">HTML</span>
        </li>
      </ul>
    ),
  },
  
  {
    title: "Education",
    id: "education",
    content: (
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-purple-400 to-blue-500 text-white">
            <th className="px-4 py-2 border border-purple-500">Institution</th>
            <th className="px-4 py-2 border border-purple-500">Degree</th>
            <th className="px-4 py-2 border border-purple-500">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-purple-500 px-4 py-2">Chandigarh University</td>
            <td className="border border-purple-500 px-4 py-2">Bachelors in Computer Science Engineering</td>
            <td className="border border-purple-500 px-4 py-2">Aug 2021 - May 2025</td>
          </tr>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-purple-500 px-4 py-2">Vision Valley School</td>
            <td className="border border-purple-500 px-4 py-2">Intermediate - PCM</td>
            <td className="border border-purple-500 px-4 py-2">Mar 2020 - April 2021</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-green-400 to-teal-500 text-white">
            <th className="px-4 py-2 border border-green-500">Certification</th>
            <th className="px-4 py-2 border border-green-500">Institution</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-green-500 px-4 py-2">
              <a href="https://www.coursera.org/account/accomplishments/verify/VZ2WCY4G5PVH" target="_blank" rel="noopener noreferrer">
                Developing AI Applications with Python
              </a>
            </td>
            <td className="border border-green-500 px-4 py-2">IBM</td>
          </tr>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-green-500 px-4 py-2">
              <a href="https://www.coursera.org/account/accomplishments/verify/P2CAL6BPFKVC" target="_blank" rel="noopener noreferrer">
                Principles of UX/UI Design
              </a>
            </td>
            <td className="border border-green-500 px-4 py-2">Meta</td>
          </tr>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-green-500 px-4 py-2">
              <a href="https://www.coursera.org/account/accomplishments/verify/HNU3DN5G42UP" target="_blank" rel="noopener noreferrer">
                Data Visualization with Tableau
              </a>
            </td>
            <td className="border border-green-500 px-4 py-2">UCDAVIS</td>
          </tr>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-green-500 px-4 py-2">
              <a href="https://drive.google.com/drive/folders/1zC2i1KVQZhoZX75cD5PzNZcF4A58IUA2?usp=drive_link" target="_blank" rel="noopener noreferrer">
                Game Designing using Unity Engine
              </a>
            </td>
            <td className="border border-green-500 px-4 py-2">Unity</td>
          </tr>
          <tr className="transition duration-300 ease-in-out transform hover:scale-105">
            <td className="border border-green-500 px-4 py-2">
              <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS123BS7466000610043586" target="_blank" rel="noopener noreferrer">
                NPTEL Online Certification in Discrete Mathematics
              </a>
            </td>
            <td className="border border-green-500 px-4 py-2">NPTEL</td>
          </tr>
        </tbody>
      </table>
    ),
  },

  {
    title: "Platforms",
    id: "platforms",
    content: (
      <ul className="list-none grid grid-cols-3 gap-4">
        <li className="flex flex-col items-center">
          <Image src="/images/unity.png" alt="Unity Engine" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Unity Engine</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/vs code.svg" alt="VS Code" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">VS Code</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/pycharm.svg" alt="PyCharm" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">PyCharm</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/jupyter.svg" alt="Jupyter Notebook" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Jupyter Notebook</span>
        </li>

        <li className="flex flex-col items-center">
          <Image src="/images/andstudio.svg" alt="Android Studio" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">Android Studio</span>
        </li>
        <li className="flex flex-col items-center">
          <Image src="/images/autocad.png" alt="AutoCad" width={50} height={50} />
          <span className="text-lg font-semibold mt-2 text-center">AutoCAD</span>
        </li>
      </ul>
    ),
  },
  
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/c.png"
          alt="about-image"
          width={500}
          height={500}
          className="mx-auto"
        />
        <div className="mt-4 md:mt-0 text-left md:text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-center md:text-left">
            Hello! I'm Kartikay Kandpal, a Computer Science Engineering student at Chandigarh University. 
            I'm passionate about technology and innovation, with skills in C++, Python, SQL, JavaScript, and more. 
            I've worked on projects like a responsive portfolio website, yoga pose detection, and sentiment analysis. 
            I'm committed to continuous learning and professional growth, aiming to contribute to the success of organizations through resourcefulness, effective communication, and a strong work ethic. 
            My goal is to leverage my academic knowledge and personal abilities to drive positive growth for my team and company while developing into a well-rounded professional. 
            Let's connect and create something amazing together!
          </p>
          <div className="flex flex-row justify-center md:justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("platforms")}
              active={tab === "platforms"}
            >
              Platforms
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((tabItem) => tabItem.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
