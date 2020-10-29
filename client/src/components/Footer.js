import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div id="main-footer">
      CopyRight &copy; <span className="mr6">{thisYear()}</span> <strong className="mr6">Creator</strong> SangHan
    </div>
  );
};

export default Footer;
