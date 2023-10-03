import img1 from "../../../assets/qZone1.png";

const RightCard = () => {
  return (
    <div className="bg-slate-100 space-y-5 px-2 py-4">
      <h2 className="text-xl font-semibold">Q-Zone</h2>

      <div className="space-y-6">
        <img src={img1} alt="" />
        <img src={img1} alt="" />
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default RightCard;
