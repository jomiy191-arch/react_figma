import "./Contact.css";
import Map from "./images/Map.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__form">
            <h1 className="contact__title">Have a question? Let’s get in touch with us.</h1>
            <p className="contact__text">Fill up the form and our team will get back to you within 24 hrs</p>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email address" />
            <textarea placeholder="Type message"></textarea>
            <button className="contact__btn">Submit</button>
          </div>
          <div className="contact__info">
            <div className="info-block">
              <h2>Location</h2>
              <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
            </div>
            <div className="info-block">
              <h2>Contact Us</h2>
              <p>020 7993 2905 <br /> hi@finsweet.com</p>
            </div>
            <img src={Map} alt="Map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
