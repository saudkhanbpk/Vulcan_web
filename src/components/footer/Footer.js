import React from "react";
import "./Footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <div className="Main_footer">
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <img
                  src={footerlogo}
                  className="img-fluid footer_loggoo"
                  alt=""
                />
                <p className="Education_text">Education for Everyone</p>
              </div>
              <p className="vulqu_mail text-start">© 2023 Vulcan Learning Institute LLC</p>
            </div>
            <div className="col-md-6  d-flex align-items-center">
              <div className="SOcial_sect d-flex justify-content-between  w-100">
                <div className="Peivacy_policy ">
                  <p>Privacy</p>
                  <p>Policy</p>
                  <p>Contact</p>
                </div>
                <div className="tweet_icon  d-flex justify-content-end align-items-center">
                  <div className="iconfortwet">
                    <TwitterIcon fontSize="large" className="twticon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
