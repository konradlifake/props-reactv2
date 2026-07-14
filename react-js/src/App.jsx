import { useState } from "react";


function App() {
  const [liked, setLiked] = useState(false);
  return (
   
        
        <button style={{width:"100px"}} onClick={ () => setLiked(!liked)} >
          {liked ? "Liked" : "Like"}
        </button>
   
  );
}
export default App;