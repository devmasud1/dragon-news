import { BsArrowUpRight } from "react-icons/bs";
import bg1 from "../../../assets/bg1.png";

const RightAdvertise = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg1})`,
  };

  return (
    <div className="hero  space-y-6" style={backgroundImageStyle}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full">
          <h1 className="mb-5 text-2xl font-bold">
            Create an Amazing Newspaper
          </h1>
          <p className="mb-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-primary">Learn More <BsArrowUpRight></BsArrowUpRight> </button>
        </div>
      </div>
    </div>
  );
};

export default RightAdvertise;
