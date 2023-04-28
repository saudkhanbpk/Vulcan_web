import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <div className="Main_footer">
        <div className="container-fluid bg-dark p-3">
          <div className="row">
            <div className="col-md-4">
              <ul className="text-white">
                <h3 className="text-white">Address</h3>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="text-white">
                <h3 className="text-white">Links</h3>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="text-white">
                <h3 className="text-white">Contact</h3>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
                <li>Some Text</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
