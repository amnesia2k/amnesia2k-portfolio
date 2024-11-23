import { Link } from "lucide-react";
import { Button } from "./ui/button";

const SocialsButton = () => {
  return (
    <Button className="w-[20px] h-[20px] p-5 rounded-full bg-white hover:bg-white shadow-lg">
      <Link className="h-[1.2rem] w-[1.2rem] text-black" />
    </Button>
  );
};

export default SocialsButton;
