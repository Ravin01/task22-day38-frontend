import { useState } from "react";
import { backendUrl } from "../config";
import "./createPost.css";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    postName: "",
    imageUrl: "",
    comments: "",
  });
  const handleChange = (ele) => {
    const { name, value } = ele.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (ele) => {
    ele.preventDefault();
    // await createPost(formData);
    await fetch(backendUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // await getData()
    setFormData({
      postName: "",
      imageUrl: "",
      comments: "",
    });
    ele.reset();
  };
  return (
    <div>
      <h3>Create post : </h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="postName">Post Name : </label>
        <input
          type="text"
          name="postName"
          id="postName"
          placeholder="Enter the name"
          onChange={handleChange}
          value={formData.postName}
        />
        <br />
        <label htmlFor="imageUrl">Image URl : </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Enter the image url"
          onChange={handleChange}
          value={formData.imageUrl}
        />
        <br />
        <label htmlFor="comments">Comment : </label>
        <input
          type="text"
          name="comments"
          id="comments"
          placeholder="Enter the comments"
          onChange={handleChange}
          value={formData.comments}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
