import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db, storage, auth } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
// import { useAuthState } from "react-firebase-hooks/auth";

const Contact = () => {
  let navigate = useNavigate();

  // =========================================================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast("Please fill all the fields", { type: "error" });
      return;
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    const articleRef = collection(db, "contacts");
    addDoc(articleRef, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        toast("Successfully sent", { type: "success" });
      })
      .catch((err) => {
        toast("Error sending message", { type: "error" });
      });
  }

  return (
    <div className="flex flex-col flex-1 gap-5">
      <input
        value={formData.name}
        onChange={(e) => handleChange(e)}
        type="text"
        name="name"
        placeholder="Your Name"
      />
      <input
        value={formData.email}
        onChange={(e) => handleChange(e)}
        type="Email"
        name="email"
        placeholder="Your Email Address"
      />
      <textarea
        value={formData.message}
        name="message"
        onChange={(e) => handleChange(e)}
        placeholder="Your Message"
        rows={10}>
      </textarea>
      <button onClick={handlePublish} className="btn-primary w-fit">Send Message</button>
    </div>
  );
};

export default Contact;
