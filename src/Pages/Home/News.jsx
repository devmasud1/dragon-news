import { BsBookmarkCheck, BsFillShareFill } from "react-icons/bs";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const News = ({ item }) => {
  const { _id, title, details, image_url, rating, total_view, author } =
    item || {};

  return (
    <div>
      <div className="border m-5 mb-8">
        <div className="flex justify-between items-center bg-slate-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={author.img} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <h4>{author.name}</h4>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <BsBookmarkCheck></BsBookmarkCheck>
            <BsFillShareFill></BsFillShareFill>
          </div>
        </div>

        <div className="px-6 my-4">
          <h2 className="text-2xl font-semibold">{title}</h2>

          <img src={image_url} alt="" className="w-full my-5" />

          <p className="text-lg font-normal">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="text-green-700">
                  Read more...
                </Link>
              </p>
            ) : (
              details
            )}
          </p>

          <hr className="my-5" />

          <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center">
              <Rating
                initialRating={rating.number}
                emptySymbol={<FaStar />}
                fullSymbol={<FaStar color="red" />}
              />
              {rating.number}
            </p>
            <p className="flex items-center gap-2">
              <AiFillEye className="text-xl"></AiFillEye> {total_view}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
