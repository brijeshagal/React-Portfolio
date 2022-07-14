import "./testimonials.scss";

export default function testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="#" alt="Right Arrow" className="left" />
            <img src="#" alt="" className="user"/>
            <img src="#" alt="Youtube Smthng!" className="right"/>
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            sunt aliquid illo aperiam animi nobis dignissimos, nam vitae soluta
            voluptates iure. Velit a voluptatem, itaque et facere quam commodi
            eveniet.
          </div>
          <div className="bottom">
            <h3>Brijesh Agal</h3>
            <h4>Chegg Expert: Calculus</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
