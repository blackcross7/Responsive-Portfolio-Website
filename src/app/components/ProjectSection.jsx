"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import MnLTag from "./MnLTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A Reactive Portfolio Website made using Next.js, CSS, HTML, Tailwind CSS, JavaScript and Framer Motion. Code Source available on Github",
    image: "/images/Project.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Solar System Simulation-3D",
    description: "A 3D Solar System Simulation made using Unity3D. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access.",
    image: "/images/Solar System Simulator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/Solar-System-Simulator-3D",
    previewUrl: "https://21bcs10038.itch.io/solar-system",
  },
  {
    id: 3,
    title: "Space Blast",
    description: "A 2D Space Shooter Game made using Unity Engine with the help of C# script. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access",
    image: "/images/Space Blast.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/SpaceBlast",
    previewUrl: "https://21bcs10038.itch.io/space-blast",
  },
  {
    id: 4,
    title: "SpaceStronaut",
    description: "Guided Project on Unity Engine. A game where you have to dodge the obstacles and destroy obstacles. Game is available on itch.io. Source Code available on Github. Hover and click over the image to access.",
    image: "/images/SpaceStronaut.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/SuperStronaut",
    previewUrl: "https://21bcs10038.itch.io/spacestronout",
  },
  {
    id: 5,
    title: "Yoga Pose Detection",
    description: "Used TensorFlow and OpenPose library to build a moel that corrects your Yoga Postures by capturing your live Posture and creating Web Interface using Flask, HTML, CSS and JavaScript",
    image: "/images/YogaPose.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/Yoga-Pose-Detection",
    previewUrl: "https://github.com/blackcross7/Yoga-Pose-Detection",
  },

  {
    id: 6,
    title: "AI Text Summarizer",
    description: "Used Transformer Models like BERT, Pegasus and T5 to do operations on text, flask to handle the Web Services and CSS, HTML and Javascript to build a web interface",
    image: "/images/txtsum.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/blackcross7/AI-Text_Summarization",
    previewUrl: "https://github.com/blackcross7/AI-Text_Summarization",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <MnLTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <MnLTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <MnLTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 sm:justify-center">
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="text-center sm:text-center"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
