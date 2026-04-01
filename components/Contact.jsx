'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [copyText, setCopyText] = useState('Copy email');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = 'ngothikimanh26022006@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopyText('Copied!');
        setCopied(true);
        setTimeout(() => {
          setCopyText('Copy email');
          setCopied(false);
        }, 2000);
      })
      .catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyText('Copied!');
        setCopied(true);
        setTimeout(() => {
          setCopyText('Copy email');
          setCopied(false);
        }, 2000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__header">
        <h2 className="section__title contact__title">Contact Me</h2>
        <p className="contact__subtitle">Tell us about your next project.</p>
        <button className="glow-btn" id="contact-button" onClick={handleCopy}>
          {copyText}{' '}
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
              <p className="contact__card-address">ngothikimanh26022006@gmail.com</p>
              <h3 className="contact__card-title">Location</h3>
              <p className="contact__card-address">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-content">
              <h3 className="contact__card-title">Social Media</h3>
              <div className="contact__card-links-wrapper">
                <div className="contact__card-links">
                  <a
                    href="https://www.facebook.com/ngothikimanh2602"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Facebook <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@kanh260206?_r=1&_t=ZS-95AJqOAz2W7"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    TikTok <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-content">
              <h3 className="contact__card-title">Let's Connect</h3>
              <div className="contact__card-links-wrapper">
                <div className="contact__card-links">
                  <a
                    href="https://zalo.me/0373671560"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    Zalo <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-link"
                  >
                    LinkedIn <i className="ri-arrow-right-up-line"></i>
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
        </div>
      </div>
    </section>
  );
}
