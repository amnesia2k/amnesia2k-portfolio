import { ModeToggle } from "./mode-toggle";
import SocialsButton from "./SocialsButton";

const Toggles = () => {
  return (
    <div className="pr-[20px] relative h-screen">
      <div className="absolute top-5">
        <ModeToggle />
      </div>

      <div className="absolute bottom-5">
        <SocialsButton />
      </div>
    </div>
  );
};

export default Toggles;
