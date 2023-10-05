import { useState } from "react";
import { getData } from "../crud";
import { useEffect } from "react";
import './post.css'

const Post = () => {
  const [data, setData] = useState([]);
  const getPost = async () => {
    let response = await getData();
    setData(response);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div style={{
        height : '70vh'
    }}>
      <h2>Posts : </h2>
      <h5>Posts from database</h5>
      <div style={{
        display : 'flex',
        flexWrap : 'wrap',
        width : '100%'
      }}>
        {data.map((data,i) => (
          <div key={i} style={{
            height : '200px',
            width : '200px',
            margin: '10px 20px',
            padding : '10px',
            backgroundColor : '#D0D3D4',
            borderRadius : '10px',
            color : 'black'
          }}>
            <h4>{data.postName}</h4>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center'
            }}>
            <img src={data.imageUrl} alt="image not yet loaded" />
            </div>
            <p>{data.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
