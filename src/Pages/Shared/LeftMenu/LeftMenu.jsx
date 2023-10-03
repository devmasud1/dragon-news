import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftCard from "./LeftCard";

const LeftMenu = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="space-y-5">
      <h4 className="text-xl font-semibold">All Category</h4>

      {category.map((item) => (
        <NavLink
          key={item.id}
          to={`/category/${item.id}`}
          style={{ display: "block", marginLeft: "10px" }}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-slate-400" : ""
          }
        >
          {item.name}
        </NavLink>
      ))}

      <div>
        <LeftCard></LeftCard>
      </div>
    </div>
  );
};

export default LeftMenu;
