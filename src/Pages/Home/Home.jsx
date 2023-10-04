import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import LeftMenu from "../Shared/LeftMenu/LeftMenu";
import NavBar from "../Shared/NavBar";
import RightMenu from "../Shared/RightMenu/RightMenu";
import BreakingNews from "./BreakingNews";
import News from "./News";
import RightAdvertise from "../Shared/RightMenu/RightAdvertise";

const Home = () => {
  const [news, setNews] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(() => {
    fetch("data/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setFilterCategory(data);
      });
  }, []);

  const handleCategory = (id) => {
    if (id == 0) {
      setNews(filterCategory);
    } else {
      const filterNews = filterCategory.filter(
        (curCategory) => curCategory.category_id === id
      );
      setNews(filterNews);
    }
  };
  return (
    <div>
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>
      </div>

      <div className="grid lg:grid-cols-4 gap-10 my-8">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <LeftMenu handleCategory={handleCategory} />
            </ul>
          </div>
        </div>

        <div className="hidden lg:block col-span-1">
          <div className="sticky top-0">
            <LeftMenu handleCategory={handleCategory} />
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="text-xl font-semibold"> Dragon News</h4>

          {news.map((item) => (
            <News key={item._id} item={item}></News>
          ))}
        </div>

        <div className="hidden lg:block col-span-1">
          <div className="sticky top-0">
            <RightMenu />
            <RightAdvertise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
