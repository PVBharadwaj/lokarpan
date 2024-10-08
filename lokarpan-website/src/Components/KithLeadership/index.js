import { Component } from "react";
import KithSearchBar from "../KithSearchBar/index";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar";
import KithFooter from "../KithFooter/index";
import "./index.css";

const imagesList = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
];

class KithLeadership extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="kith-leadership-container">
          <div className="kith-leadership-upper-section">
            <div>
              <h1>Building the Next Big Thing</h1>
              <p>
              Leadership at Kith is about trusting your team to introduce revolutionary ideas that will boost classroom outcomes.

              </p>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1683121935695-ff8598e7f0ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="mobile-kith-leadership-upper-section">
            <h1>Building the Next Big Thing</h1>
            <p>
            Leadership at Kith is about trusting your team to introduce revolutionary ideas that will boost classroom outcomes.

            </p>
          </div>
          
          <div className="kith-leadership-images-container">
            <h1 className="kith-font48">Officers</h1>
            <KithSearchBar />
            <ul className="images-list">
              {imagesList.map((each) => (
                <li>
                  <img src={each} className="each-list-img" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default KithLeadership;
