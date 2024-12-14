"use client";
import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import AtomicBookImage from "@/assets/images/book-cover.png";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import {
  SiExpress,
  SiReact,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiCss3,
} from "react-icons/si";
import { RiNextjsLine, RiNodejsFill } from "react-icons/ri";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const constrintRef = useRef(null);
  const toolboxitem = [
    {
      title: "Javascript",
      icon: <SiJavascript />,
    },
    {
      title: "Typescript",
      icon: <SiTypescript />,
    },
    {
      title: "React",
      icon: <SiReact />,
    },
    {
      title: "Nextjs",
      icon: <RiNextjsLine />,
    },
    {
      title: "HTML",
      icon: <SiHtml5 />,
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      title: "Nodejs",
      icon: <RiNodejsFill />,
    },
    {
      title: "Express",
      icon: <SiExpress />,
    },
    {
      title: "CSS",
      icon: <SiCss3 />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      title: "Github",
      icon: <SiGithub />,
    },
  ];

  const beyondthecode = [
    {
      title: "Gaming",
      icon: "🎮",
    },
    {
      title: "Fitness",
      icon: "💪",
    },
    {
      title: "Reading",
      icon: "📖",
    },
    {
      title: "Music",
      icon: "🎵",
    },
  ];
  return (
    <div className="py-20">
      <div className="container">
        <HeaderSection
          eyeBrow="About Me"
          title="A Glimpse into My World"
          description="Learn more about who I am, what I do, and what inspire me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0 ">
            <CardHeader
              title="My Toolbox"
              description="Explore the tools and technologies I use to craft degital experiences."
              className="px-6 mt-6"
            />
            <div className="flex flex-col gap-6 mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex flex-none gap-4 animate-move-left [animation-duration:20s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    {toolboxitem.map((item) => (
                      <div key={item.title} className="flex flex-col gap-6">
                        <Button
                          className="p-[28px]  "
                          text={item.title}
                          variant="secondary"
                          icon={item.icon}
                          iconPosition="left"
                        />
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
              <div className="flex flex-none gap-4 animate-move-right [animation-duration:20s]">
                {[...new Array(2)].fill(0).map((_, idx) => (
                  <Fragment key={idx}>
                    {toolboxitem.map((item) => (
                      <div key={item.title} className="flex flex-col gap-6">
                        <Button
                          className="p-[28px]  "
                          text={item.title}
                          variant="secondary"
                          icon={item.icon}
                          iconPosition="left"
                        />
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </Card>
          <div className="flex gap-8 flex-col md:flex-row ">
            <Card className="h-[320px] max-w-sm ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspertive."
              />
              <div className="w-40 mx-auto mt-8 ">
                <Image src={AtomicBookImage} alt="books" />
              </div>
            </Card>

            <Card className="h-[320px] max-w-3xl">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the degital realm."
              />
              <div className="flex flex-none gap-4" ref={constrintRef}>
                {beyondthecode.map((item) => (
                  <motion.div
                    drag
                    dragConstraints={constrintRef}
                    key={item.title}
                    className="flex flex-col gap-6 mt-8"
                  >
                    <Button
                      text={item.title}
                      variant="informative"
                      icon={item.icon}
                      iconPosition="left"
                    />
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
