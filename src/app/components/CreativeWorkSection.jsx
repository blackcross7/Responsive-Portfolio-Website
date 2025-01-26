"use client";
import React, { useState, useRef } from "react";
import MnLCard from "./MnLCard";
import MnLTag from "./MnLTag";
import { motion, useInView } from "framer-motion";

const creativeWorksData = [
  {
    id: 1,
    title: "My Music Album",
    description: "A collection of my original music compositions.",
    imgUrl: "/images/Music.avif",
    tag: ["All", "Music"],
    dropdownItems: [
      {
        title: "Teri Baatein",
        cover: "/images/Teri Baatein.jpg",
        url: "https://open.spotify.com/track/4WHizDD61lj8WncX3hsN3Q?si=088285e3e9414899",
      },
      {
        title: "Sapne",
        cover: "/images/Sapne.jpg",
        url: "https://open.spotify.com/track/13nx4q5ZkNNnCWtmH5YK7g?si=7efcb86c2dbf4bf6",
      },
    ],
  },
  {
    id: 2,
    title: "My Writings",
    description: "A captivating story that I wrote.",
    imgUrl: "/images/Wattpad.jpg",
    tag: ["All", "Writing"],
    dropdownItems: [
      {
        title: "Even After You",
        cover: "/images/NCover.jpg",
        url: "https://www.wattpad.com/story/338262871-even-after-you",
      },
    ],
  },
];

const CreativeWorksSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredWorks = creativeWorksData.filter((work) =>
    work.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="creative-works" className="mt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Creative Works
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <MnLTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <MnLTag
          onClick={handleTagChange}
          name="Music"
          isSelected={tag === "Music"}
        />
        <MnLTag
          onClick={handleTagChange}
          name="Writing"
          isSelected={tag === "Writing"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredWorks.map((work) => (
          <motion.li
            key={work.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: work.id * 0.4 }}
          >
            <MnLCard
              title={work.title}
              description={work.description}
              imgUrl={work.imgUrl}
              dropdownItems={work.dropdownItems}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CreativeWorksSection;
