import { Button } from "@/components/ui/button";
import { heroImg } from "../assets/index";

const About = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col h-screen justify-center gap-5 w-[600px]">
        <div>
          <h1 className="text-6xl leading-tight font-semibold">
            <span className="text-muted-foreground">Hey there, I'm</span> <br />
            Olatoye Olatilewa
          </h1>
        </div>

        <p>
          I am a frontend developer with expertise in creating responsive,
          user-friendly, and visually engaging web applications using modern
          technologies. I am passionate about delivering seamless user
          experiences through clean code, intuitive design, and innovative
          solutions. Driven by a commitment to tackling challenges, I aim to
          create impactful solutions that align with user needs and company
          goals.
        </p>

        <Button asChild className="w-[40%] bg-black dark:bg-white">
          <a
            href="https://docs.google.com/document/d/17hnXQlquLbd3nxw-OYypnt2mgbeKa-g05_phfeFT9j4/edit?usp=sharing"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            View My Resumé
          </a>
        </Button>
      </div>

      <img src={heroImg} alt="hero_img" width={500} className="object-contain" />
    </div>
  );
};

export default About;
