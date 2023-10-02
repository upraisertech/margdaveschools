import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db, storage, auth } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
// import { useAuthState } from "react-firebase-hooks/auth";

const FeedBack = () => {
  let navigate = useNavigate();

  // =========================================================================================

  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    message: "",
    createdAt: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (!formData.name || !formData.projectName || !formData.message) {
      toast("Please fill all the fields", { type: "error" });
      return;
    }
    setFormData({
      name: "",
      projectName: "",
      message: "",
    });

    const articleRef = collection(db, "feedbacks");
    addDoc(articleRef, {
      name: formData.name,
      projectName: formData.projectName,
      message: formData.message,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        toast("FeedBack Successfully sent", { type: "success" });
      })
      .catch((err) => {
        toast("Error sending FeedBack", { type: "error" });
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
        value={formData.projectName}
        onChange={(e) => handleChange(e)}
        type="text"
        name="projectName"
        placeholder="Your Project Name"
      />
      <textarea
        value={formData.message}
        name="message"
        onChange={(e) => handleChange(e)}
        placeholder="Your Message"
        rows={10}
        maxLength={250}
      />
      <div className="mt-[-50px] mr-4 text-right">
        {250 - formData.message.length}
      </div>
      <button onClick={handlePublish} className="btn-primary w-fit">Send FeedBack</button>
    </div>
  );
};

export default FeedBack;
