import CreatePost from "../Components/CreatePost";
// import Post from "../Components/post";
import Post from "../Components/Post";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div style={{
          width : '35%',
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center'
        }}>
        <CreatePost />
        </div>
       <div style={{
        width : '65%'
       }}>
       <Post />
       </div>
      </div>
    </>
  );
}

export default App;
