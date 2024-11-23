import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <div className="flex justify-around items-center">
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
    </div>
  );
};

export default Projects;
