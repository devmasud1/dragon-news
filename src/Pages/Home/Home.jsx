import Header from "../Shared/Header";
import LeftMenu from "../Shared/LeftMenu/LeftMenu";
import NavBar from "../Shared/NavBar";
import RightMenu from "../Shared/RightMenu/RightMenu";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>
      </div>

      <div className="grid lg:grid-cols-4 gap-10 my-8">
        <div className="">
          <LeftMenu></LeftMenu>
        </div>
        <div className="border-2 col-span-2">Dragon News Home</div>
        <div className="border-2">
          <RightMenu></RightMenu>
        </div>
      </div>
    </div>
  );
};

export default Home;
