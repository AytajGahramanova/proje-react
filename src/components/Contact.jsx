import React, { useState } from "react";
import axios from "axios";
import News from "./News";
import Footer from "./Footer";
import "../components/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const addValue = async () => {
    const res = await axios.post("http://localhost:3000/users", {
      name,
      phone,
      email,
      textarea,
    });
    console.log(res);
  };
  return (
    <div>
      <form action="">
        <div className="container">
          <div className="form-control">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Write Message</label>
            <textarea
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <button style={{ marginTop: 20 }} onClick={() => addValue()}>
              Send Message
            </button>
          </div>
        </div>
      </form>
      <News />
      <Footer />
    </div>
  );
};

export default Contact;
