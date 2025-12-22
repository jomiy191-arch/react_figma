import Bolakay from "./images/bolakay.svg";
import Qizcha from "./images/qizcha.svg";
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <ul className="blog__list">
          <li className="blog__item">
            <div className="blog__text-container">
              <span className="blog__span">
                <img src={Bolakay} alt="Author" />
                <div>
                  <a href="#">Andrew Jonson   Posted on 27th January 2021 </a>
                </div>
              </span>
              <h1 className="blog__title">Our internal process and long-term vision</h1>
              <p className="blog__text">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is decentralized. We aim to attain the...
              </p>
              <a className="blog__link" href="#">Read More →</a>
            </div>
            <div className="blog__image-container">
              <img src={Qizcha} alt="Blog" className="blog__image"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
