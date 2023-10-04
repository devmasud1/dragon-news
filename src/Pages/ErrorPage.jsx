import BreakingNews from "./Home/BreakingNews";
import Header from "./Shared/Header";
import NavBar from "./Shared/NavBar";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <Header></Header>
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>
        <div className="flex justify-center items-center h-[40vh]">
      <h1 className="text-3xl font-semibold">Page not found</h1>
    </div>
    </div>
  );
};

export default ErrorPage;
