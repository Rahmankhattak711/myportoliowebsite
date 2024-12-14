import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Button from "@/components/Button";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "/",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "/",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <HeaderSection
          eyeBrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col gap-20 md:gap-24 lg:gap-10 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="lg:flex lg:flex-row lg:gap-20 lg:px-20 lg:h-[350px] bg-gray-800 rounded-3xl border-2 overflow-hidden border-white/5 px-8 md:px-10 md:pt-10 pt-8 lg:pt-6 sticky top-16 "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div>
                <div className="flex-inline bg-gradient-to-r uppercase font-bold  tracking-widest from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:pt-8">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="text-2xl lg:w-[350px]  md:text-4xl font-serif mt-4 lg:mt-2 lg:text-2xl md:mt-[36px]">
                  {project.title}
                </h2>

                <hr className="border-t-2 border-white/5 mt-4" />

                <ul className="flex flex-col gap-4 lg:gap-2 mt-4 text-white/60 text-sm md:text-base">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 items-center">
                      <CheckCircle className="size-5 md:size-6" />
                      {result.title}
                    </li>
                  ))}
                </ul>

                <a href={project.link}>
                  <Button
                    text="Visit Live Site"
                    variant="primary"
                    iconPosition="right"
                    className="w-full md:w-48 inline-flex justify-center mt-6 items-center"
                    icon={<ArrowRightIcon className="size-5" />}
                  />
                </a>
              </div>

              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
