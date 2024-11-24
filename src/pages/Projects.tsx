import { link } from "@/assets";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { client, urlFor } from "@/lib/sanity";
import { useEffect, useState } from "react";

interface projectCard {
  title: string;
  image: any;
  description: string;
  technologies: string;
  githubUrl: string;
  projectUrl: string;
}

const Projects = () => {
  const [projectData, setProjectData] = useState<projectCard[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'project'] | order(_createdAt desc) {
          title,
            image,
            description,
            technologies,
            githubUrl,
            projectUrl
        }`
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex items-center justify-center gap-10 overflow-y-hidden">
      <div className="flex flex-col h-screen justify-center gap-5 w-[600px]">
        <div>
          <h1 className="text-6xl leading-tight font-semibold">
            <span className="text-muted-foreground">I enjoy creating</span>{" "}
            <br />
            user-friendly projects
          </h1>
        </div>

        <p>
          I like to explore new ideas and bring them to life by building tools
          or applications that are both practical and exciting. You can check
          out some of these creations, along with others I’ve worked on, on my
          GitHub page.
        </p>

        <Button asChild className="w-[40%] bg-black dark:bg-white">
          <a
            href="https://github.com/amnesia2k"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            View My Github
          </a>
        </Button>
      </div>

      <div className="py-12 px-5 overflow-y-auto lg:h-[450px] w-[450px] md:grid-cols-2 lg:grid-cols-1 grid gap-10">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-lg dark:shadow-[#181c14] border-none"
          >
            <img src={urlFor(project.image)} className="rounded-t-xl" alt="" />
            <CardDescription className="text-black dark:text-white p-5 flex flex-col gap-[10px]">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-md leading-5 text-[#5e5c5c] dark:text-[#cac7c7] font-semibold">
                {project.description}
              </p>
              <p className="text-lg font-bold">{project.technologies}</p>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-[5px]">
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg"
                    className="grayscale dark:filter dark:invert w-[20px] h-[20px]"
                    alt=""
                  />
                  <a
                    href={project.githubUrl}
                    className="text-md font-semibold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="flex items-center gap-[5px]">
                  <img
                    src={link}
                    className="grayscale dark:filter dark:invert w-[20px] h-[20px]"
                    alt=""
                  />
                  <a
                    href={project.projectUrl}
                    className="text-md font-semibold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project
                  </a>
                </div>
              </div>
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
