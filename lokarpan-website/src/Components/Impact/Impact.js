import "./Impact.css";
import ImpactCarousel from "../Carousals/ImpactCarousel/ImpactCarousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Impact = () => {
  return (
    <>
      <Navbar />
      <div className="impact-top"></div>
      <div className="fellowship-page">
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708621836/IMG_3313_2_c7dnbw.png"
              alt="img1"
            />
            <h3 className="impact-title">We look for big ideas.</h3>
            <p className="fellow-data">
              We believe big things can happen when you dont shy from big ideas.
              We look for non-profits, social enterprises and civic entities who
              understand the needs of marginilized and vulnerable populations
              andare working to address inequities at scale.
            </p>
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://images.unsplash.com/photo-1603485170238-d0eaf004f3ca?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img2"
            />
            <h3 className="impact-title">We ask communities what they need.</h3>
            <p className="fellow-data">
              We believe big things can happen when you dont shy from big ideas.
              We look for non-profits, social enterprises and civic entities who
              understand the needs of marginilized and vulnerable populations
              andare working to address inequities at scale.
            </p>
          </div>
        </div>
        <div className="third-div">
          <h5 className="impact-head">ACCLERATING IMPACT</h5>
          <h2 className="impact-title">
            We provide support through a combination of funding, innovation and
            technical expertise.
          </h2>
        </div>
      </div>

      <div className="impact-carousel-div">
        <ImpactCarousel />
      </div>
      <div className="fellowship-page impact-carousel-bottom-div">
        <div className="fourth-div">
          <h3 className="impact-title">The Google.org Fellowship</h3>
          <p className="fourth-div-data fellow-data">
            Join us as a volunteer or a fellow and become an integral part of
            our mission to transform rural education. Volunteers dedicate their
            time and skills to support our programs, making a significant impact
            in the communities we serve. Our fellowship program offers a
            longer-term opportunity to devise innovative solutions that drive
            meaningful change, while receiving exceptional training and
            mentoring sessions from experienced colleagues and partners.
            <a
              href="https://forms.gle/8sCFPdReJMsR4KcC7"
              target="_blank"
              className="anchor-no-line fellow-data a-bold"
            >
              Join Us
            </a>
          </p>
        </div>
      </div>

      {/* <div className="opp impact-opp">
        <h3 className="opp-head fellow-data">OPPORTUNITIES</h3>
        <p className="opp-data impact-title">
          Through Google.org Impact challenges, we award nonprofits and social
          enterprises with support to help bring their ideas to life.
        </p>
        <div className="apply-btn white">
          <Link to="/" className="apply-btn-text-black body-btn">
            Apply
          </Link>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Impact;
