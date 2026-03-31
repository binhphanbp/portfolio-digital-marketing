"use client";
import React, { useState } from "react";

export default function Contact() {
  const [copyText, setCopyText] = useState("Copy email");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "codezenic11@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopyText("Copied!");
        setCopied(true);
        setTimeout(() => {
          setCopyText("Copy email");
          setCopied(false);
        }, 2000);
      })
      .catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopyText("Copied!");
        setCopied(true);
        setTimeout(() => {
          setCopyText("Copy email");
          setCopied(false);
        }, 2000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__header">
        <h2 className="section__title contact__title">Contact Us</h2>
        <p className="contact__subtitle">Tell us about your next project.</p>
        <button
          className="glow-btn"
          id="contact-button"
          onClick={handleCopy}
        >
          {copyText}{" "}
          {copied ? (
            <i className="ri-check-line"></i>
          ) : (
            <i className="ri-file-copy-line"></i>
          )}
        </button>
      </div>

      <div className="contact__container container">
        <div className="contact__info">
          
          <div className="contact__card">
            <div className="contact__card-content">
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-address">codezenic11@gmail.com</p>
              <h3 className="contact__card-title">Location</h3>
              <p className="contact__card-address">New Delhi, India</p>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-content">
              <h3 className="contact__card-title">Social Media</h3>
              <div className="contact__card-links-wrapper">
                <div className="contact__card-links">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Linkedin <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Github <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Dribble <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Gitlab <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-content">
              <h3 className="contact__card-title">Write Us & We'll Talk</h3>
              <div className="contact__card-links-wrapper">
                <div className="contact__card-links">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    WhatsApp <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    linkedin <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Telegram <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Instagram <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
