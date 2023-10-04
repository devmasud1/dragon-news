import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news, allNews }) => {
  const { image_url, title, details } = news || {};

  const firstThree = allNews.slice(0, 3);

  return (
    <div>
      <div className="border p-4">
        <img src={image_url} alt="" className="w-full object-cover" />
        <h2 className="text-2xl font-bold my-4">{title}</h2>
        <p className="mb-4">{details}</p>
        <Link to="/">
          <button className="bg-red-400 px-8 py-3 text-white font-medium flex items-center gap-3">
            {" "}
            <AiOutlineArrowLeft className="text-2xl"></AiOutlineArrowLeft>Back
            to all news
          </button>
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-semibold my-5">Editors Insight</h2>
        <div className="grid grid-cols-3 gap-8">
          {firstThree.map((newsItem, idx) => (
            <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img src={newsItem.image_url} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-medium">{newsItem.title}</h2>

                <p>{newsItem.author.published_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
