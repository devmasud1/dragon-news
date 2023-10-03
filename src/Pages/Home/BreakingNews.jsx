import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center bg-slate-200 py-3 px-8">
      <button className="btn bg-[#fb54007c]">Latest</button>
      <Marquee
      speed={100}
      >
        <p> Match Highlights: Germany vs Spain — as it happened</p>
        <p>Match Highlights: Germany vs Spain as...</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
