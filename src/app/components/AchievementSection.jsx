"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    id: 1,
    metric: "Projects",
    value: "100",
    postfix: "+",
    icon: "/github-icon.svg", // Add the icon path here
  },
  {
    id: 2,
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    id: 3,
    metric: "Awards",
    value: "7",
  },
  {
    id: 4,
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  useEffect(() => {
    const rollingKeyframes = `
      @keyframes rolling {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(rollingKeyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement) => {
          return (
            <div
              key={achievement.id}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              {achievement.icon ? (
                <Image
                  src={achievement.icon}
                  alt={`${achievement.metric} icon`}
                  width={50}
                  height={50}
                  style={{
                    animation: "rolling 2s infinite linear",
                  }}
                />
              ) : (
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix || ""}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix || ""}
                </h2>
              )}
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
