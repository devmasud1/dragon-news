import { useEffect, useState } from "react";
import LeftCard from "./LeftCard";

const LeftMenu = ({ handleCategory }) => {
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <div className="space-y-5">
      <h4 className="text-xl font-semibold">All Category</h4>

      {category.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            handleCategory(item.id);
            setActiveCategory(item.id);
          }}
          className={`block px-4 py-2 w-full ${
            activeCategory === item.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {item.name}
        </button>
      ))}

      <div className="hidden lg:block">
        <LeftCard></LeftCard>
      </div>
    </div>
  );
};

export default LeftMenu;
