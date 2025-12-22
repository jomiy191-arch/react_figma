import "./Careers.css";
import Rasm1 from "./images/rasm1.svg"
const Careers = () => {
  return (
    <div className="careers">
      <div className="container">
        <div className="careers__container">
            <ul className="careers__list">
              <li className="careers__item">
                <h1 className="careers__title">We hired people who are very passionate about what they do</h1>
                <p className="careers__text">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
                <button className="careers__btn">View Positions</button>
              </li>
              <li><img src={Rasm1} alt="" /></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Careers;

