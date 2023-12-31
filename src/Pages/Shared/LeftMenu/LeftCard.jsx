import { MdOutlineDateRange } from 'react-icons/md';

const data = [
  {
    id: "1",
    img: "https://i.ibb.co/hxG29nr/unsplash-Eh-Tc-C9s-YXsw-9.png",
    title: "‘Self-obsessed liar’: Meghan mocked for Mandela story",
    type: "Sports",
    date: "August 14, 2023",
  },
  {
    id: "2",
    img: "https://i.ibb.co/CVg1Nrt/unsplash-Eh-Tc-C9s-YXsw-5.png",
    title: "“Max Verstappen has plenty trophies” – Lando Norris wants $50 Million a year Dutch sensation to give him his trophy",
    type: "Sports",
    date: "September 4, 2023",
  },
  {
    id: "3",
    img: "https://i.ibb.co/52RtgDv/2.jpg",
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    type: "Sports",
    date: "October 24, 2023",
  },
];

const LeftCard = () => {
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <div key={item.id} className="card  bg-base-200 shadow">
          <figure>
            <img src={item.img} alt="news title" />
          </figure>
          <div className="card-body px-3">
            <h2 className="card-title">{item.title}</h2>

            <div className="flex justify-around items-center">
              <p>{item.type}</p>
              <p className='flex items-center gap-2'><span><MdOutlineDateRange></MdOutlineDateRange></span> {item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftCard;
