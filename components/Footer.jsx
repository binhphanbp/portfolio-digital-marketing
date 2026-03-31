import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copy">
        All Rights Reserved By <span>KimAnh</span>
      </span>
      <span className="footer__year">
        {" "}
        &#169; <span id="footer-year">{currentYear}</span>{" "}
      </span>
    </footer>
  );
}
