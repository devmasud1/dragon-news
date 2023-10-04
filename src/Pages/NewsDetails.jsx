import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import NavBar from "./Shared/NavBar";
import { useEffect, useState } from "react";
import NewsDetailsCard from "./NewsDetailsCard";
import RightMenu from "./Shared/RightMenu/RightMenu";

const NewsDetails = () => {
  const [allNews, setAllNews] = useState([]);
  const [news, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, [setAllNews]);

  useEffect(() => {
    const filterNews = allNews.find((news) => news._id === id);
    setNews(filterNews);
  }, [allNews, id]);
  console.log(news);
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid lg:grid-cols-4 gap-10">
        <div className="col-span-3">
        <h4 className="text-xl font-semibold mb-6"> Dragon News </h4>
          <NewsDetailsCard news={news} allNews={allNews}></NewsDetailsCard>
        </div>
        <div>
            <RightMenu></RightMenu>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
