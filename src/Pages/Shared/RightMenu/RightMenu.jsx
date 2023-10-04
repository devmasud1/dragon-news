import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import RightCard from "./RightCard";

const RightMenu = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">LogIn with</h2>

      <div className="space-y-6">
        <button className="btn w-full">
          <BsGoogle></BsGoogle>Google
        </button>
        <button className="btn w-full">
          <AiFillGithub></AiFillGithub>Github
        </button>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Find Us on</h2>

        <a href="" className="flex items-center gap-2 border px-4 py-2">
          <BsFacebook></BsFacebook> Facebook{" "}
        </a>
        <a href="" className="flex items-center gap-2 border px-4 py-2">
          <AiFillTwitterCircle></AiFillTwitterCircle> Twitter{" "}
        </a>
        <a href="" className="flex items-center gap-2 border px-4 py-2">
          <BsInstagram></BsInstagram> Instagram{" "}
        </a>
      </div>

      <div>
        <RightCard></RightCard>
      </div>
    </div>
  );
};

export default RightMenu;
