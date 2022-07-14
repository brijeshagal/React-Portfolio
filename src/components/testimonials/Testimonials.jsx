import "./testimonials.scss";

export default function testimonials() {
  const data = [
    {
      id: 1,
      name: "Brijesh Agal",
      title: "Chegg Expert",
      img: "#",
      icon: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Aradhya Mishra",
      title: "Tun Tun",
      img: "#",
      icon: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      featured: true,
    },
    {
      id: 3,
      name: "Jatin Raj Saini",
      title: "Bholu",
      img: "#",
      icon: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Hritik Kumar",
      title: "Dholu",
      img: "#",
      icon: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured? "card featured": "card"}>
            <div className="top">
              <img src="#" alt="Right Arrow" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="Youtube Smthng!" className="right" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
