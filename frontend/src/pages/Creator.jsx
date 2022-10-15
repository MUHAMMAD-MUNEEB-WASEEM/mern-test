import axios from "axios";
import React, { useEffect, useState } from "react";
import storage from '../firebase'
import './Creator.css'


const Creator = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [uploaded, setUploaded] = useState(0);

  const handleSubmit = async () => {

    await axios
    .post("http://localhost:5000/api/post/creator", {title, description})
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });    
  }


  const upload = (item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUploaded((prev) => prev + 1);
          });
        }
      );
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload(
      { file: img, label: "img" });
  };

  return  (
  <div className="creator">



    <h1>Post</h1>

    <form className="creator__form">
      <input placeholder="Enter Title" type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
      <input placeholder="Enter Description" type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
      <input name="img" type="file" accept=".png, .jpg, .jpeg" onChange={e=>setImg(e.target.files[0])}/>
    </form>

    <button className="addProduct__button" onClick={handleUpload}>Image Upload</button>

    <button onClick={handleSubmit}>Post</button>

  </div>
  
  )
};

export default Creator;
