import React from "react";
import Nav from "../componets/nav/index";
import Main from "../componets/appointment/index";
import Youtubefed from "../componets/feedback/Youtubefed";
import Ytvideo from "../componets/miniComponet/Ytvideo";
import Servvices from "../componets/slider/index";
import "./style.css";
import IVF from "../componets/IvfSection/IVF";
import { Link } from "react-scroll";
import Location from "../componets/location";
import Enquiry from "../componets/enquiry/indes";

const MainPage = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Youtubefed />
      <Servvices />

      <section className="mini-section" id="doctor">
        <div className="docter-review">
          <h1>Infertility Is Healable. Don’t Lose Hope.</h1>
        </div>
        <div className="main-sec">
          <div className="sec-all">
            <div className="svg-img">
              <img
                src="https://psychiatry.ufl.edu/wordpress/files/2021/08/lactation-processed.png"
                width={"106px"}
                alt=""
              />
              <img
                src="https://thumbs.dreamstime.com/b/simple-vector-illustration-graphic-web-design-commercial-purposes-healthcare-medical-doctor-icon-orange-color-isolated-195319368.jpg"
                width={"106px"}
                alt=""
              />
            </div>
            <div className="svg-hed">
              <p>
                <strong>10,000+</strong>
                <br />
                "Happy Mother & Newborn"
              </p>
              <p>
                <strong>18+</strong>
                <br />
                Years Serving Mothers <br />
                &amp; Their Babies
              </p>
            </div>
            <div className="good-me">
              <Ytvideo
                videolink={"https://www.youtube.com/embed/g48hS4LGtSY"}
              />
            </div>
          </div>
        </div>
        <div className="heading-2">
          <h1>IVF Treatment At An Affordable Cost </h1>
          <div className="doc-para">
            <p>
              Infertility is a painful and difficult journey. It’s even more
              challenging when you are not sure what to do or where your next
              step should be, which can make the whole process seem overwhelming
              in general; but at Altius. we’ve got everything under control.
              Altius is a world-class Fertility center that has brought in the
              most advanced technology to ensure cost-effectiveness.
            </p>
          </div>
          <div className="doc-btn">
            <Link
              to="enqu"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span className="doc-span">Book Your First Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      <IVF />
      <div style={{display:"flex",padding:"30px", marginLeft:"45px",flexWrap:"wrap"}}>
      <Location
        addHead={"Rajajinagar"}
        address={
          "#6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Near Ram Mandir, Bengaluru - 560 010"
        }
        phone={+918882799799}
        email={"care@altiushospital.com"}
      />
      <Location
        addHead={"Rajarjeswari Nagar"}
        address={
          "# 915, First Floor Danush Palza, Ideal Homes Township, Rajarajeshwarinagar, Bengaluru - 560098"
        }
        phone={+918882799799}
        email={"care@altiushospital.com"}
      />
      <Location
        addHead={"HBR Layout"}
        address={
          "#511,Outer ring road,4th Block HBR layout, Bengaluru"
        }
        phone={+918882799799}
        email={"care@altiushospital.com"}
      />
      <Location
        addHead={"Yelahanka"}
        address={
          "Ground Floor, Amenities Building, North Gate Phase 2, Yelahanka, Bengaluru - 560064"
        }
        phone={+918882799799}
        email={"care@altiushospital.com"}
      />
      </div>
     <Enquiry />
    </div>
  );
};

export default MainPage;
