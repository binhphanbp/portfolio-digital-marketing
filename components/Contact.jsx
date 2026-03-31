"use client";
import React, { useState } from "react";

export default function Contact() {
  const [copyText, setCopyText] = useState("Copy email");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "Willer123@email.com";
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
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <p className="contact__description">Tell me about your next project.</p>

          <button
            className="contact__button"
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

        <div className="contact__info">
          <div className="contact__card">
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-address">Willer123@email.com</p>
            <h3 className="contact__card-title">Location</h3>
            <p className="contact__card-address">Lima, Peru</p>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title" style={{ textAlign: "right" }}>Social Media</h3>
            <div className="contact__card-links" style={{ alignItems: "flex-end" }}>
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
                GitHub <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noreferrer"
                className="contact__card-link"
              >
                Dribbble <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="https://about.gitlab.com/"
                target="_blank"
                rel="noreferrer"
                className="contact__card-link"
              >
                GitLab <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title" style={{ textAlign: "right" }}>Write Me & We'll Talk</h3>
            <div className="contact__card-links" style={{ alignItems: "flex-end" }}>
              <a
                href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                target="_blank"
                rel="noreferrer"
                className="contact__card-link"
              >
                WhatsApp <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="https://m.me/bedimcode"
                target="_blank"
                rel="noreferrer"
                className="contact__card-link"
              >
                Messenger <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="https://t.me/telegram"
                target="_blank"
                rel="noreferrer"
                className="contact__card-link"
              >
                Telegram <i className="ri-arrow-right-up-line"></i>
              </a>
              <a
                href="https://www.instagram.com/"
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
    </section>
  );
}
