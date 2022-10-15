import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const AdminHome = () => {

  const [posts, setPosts] = useState([])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{

     axios.get('http://localhost:5000/api/post')
        .then(response=>{
            console.log(response)
            setPosts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
},[posts])

const handledelete = async (id) => {

  await axios
  .delete("http://localhost:5000/api/post/" + id)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error);
  });    
}

const handleUpdate = async (id) => {

  await axios
  .put("http://localhost:5000/api/post/" + id, {title, description})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error);
  });    
}
  return(
    <div>
        {posts.map((post, key)=>(
          <div key={key}>

              <h3>Title: {post.title}</h3>
              <h3>Description: {post.description}</h3>
              <button onClick={()=>handledelete(post._id)}>Delete</button>

              <h3 style={{paddingTop: "30px", paddingBottom: "30px"}}>Update</h3>

              <form >
                  <label>Title: <input type="text" onChange={e=>setTitle(e.target.value)}/></label>
                  <label>Description: <input type="text" onChange={e=>setDescription(e.target.value)}/></label>
                  {/* <label>Image: <input name="img" type="file" accept=".png, .jpg, .jpeg" onChange={e=>setImg(e.target.files[0])}/></label> */}
               </form>

              <div style={{padding: "20px 0px 20px 0px"}}>
              <button onClick={()=>handleUpdate(post._id)}>Update</button>

              </div>

          </div>

        ))}

    </div>
  )
};

export default AdminHome;
