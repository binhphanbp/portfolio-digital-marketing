import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          All Rights Reserved By <span className="footer__author">KimAnh</span>
        </span>
        <span className="footer__year">
          &#169; <span id="footer-year">{currentYear}</span>
        </span>
      </div>
    </footer>
  );
}
