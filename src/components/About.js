import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Text Formatter</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Us
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Welcome to TextFormatter, your go-to destination powered by
                React JS for seamless text formatting.
              </strong>{" "}
              <br />
              Our website is dedicated to simplifying your text-related tasks,
              offering a suite of powerful tools designed to expedite processes
              without the need for a full-fledged word processor.
              <br />
              At TextFormatter, we recognize the importance of efficiency and
              aim to transform time-consuming and repetitive tasks into quick,
              intuitive actions. Whether you're crafting documents, composing
              emails, or working on any text-based project, our formatting tools
              are here to enhance your workflow.
              <br />
              What sets TextFormatter apart is not just its ability to format
              text—it's the valuable insights we provide. Get instant word and
              character counts for your text, helping you gauge the length and
              impact of your content. Additionally, we offer a unique feature
              that estimates the human time required to read your words or
              sentences, giving you a deeper understanding of your content's
              readability.
              <br />
              <br />
              Join us on a journey of efficiency and precision. TextFormatter is
              more than just a tool; it's your ally in the world of text,
              striving to elevate your experience and make your tasks more
              enjoyable and streamlined. Explore the possibilities and let
              TextFormatter redefine the way you approach text formatting.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Privacy
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong> Privacy is a top priority at textformatter.com.</strong>{" "}
              <br />
              Our text formatter tools utilize JavaScript technology, ensuring
              that all of your text remains securely stored locally on your own
              devices. None of your text is transmitted over the Internet,
              guaranteeing that it is inaccessible to anyone outside of your
              machine. <br />
              We are committed to safeguarding your anonymity. As part of our
              privacy measures, we neither create nor read cookies. Your data
              and usage remain confidential, providing you with a secure and
              private environment for your text formatting needs. <br />
              At textformatter.com, we prioritize transparency and user privacy,
              aiming to enhance your experience while maintaining the highest
              standards of data protection. If you have any concerns or
              questions regarding your privacy on our platform, please don't
              hesitate to contact us.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Got questions, suggestions, or just want to say hello?
              </strong>
              <br />
              We'd love to hear from you! Your feedback is invaluable, and we're
              here to assist you in any way we can. Contacting us is easy—simply
              drop us a message using the form below, and we'll get back to you
              as soon as possible. Your satisfaction is our priority, and we're
              committed to providing a seamless experience on textformatter.com.
              <br />
              If you prefer reaching out through email, you can send your
              inquiries to{" "}
              <a
                href="mailto:bhushanbahalkar189@email.com?subject=Enter your subject here &body= type your quries here and tell us what we need to improve "
              >
                {" "}
                Send mail
              </a>
              .We appreciate your engagement and look forward to connecting
              with you. Thank you for choosing textformatter.com, where your
              input matters. We're here to make your text formatting experience
              exceptional.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          onClick={toggleStyle}
          className="btn btn-primary my-3"
        >
          {btntext}
        </button>
      </div>
    </div>
  );
}

