import { useEffect } from "react";
import { useState } from "react";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.org/posts");
      let result = await res.json();
      setPosts(result);
    })();
  }, []);
  
  return (
   <div className="my-24">
<h1 className="text-4xl font-bold mb-10">All Post</h1>
<div className="grid  gap-5 grid-cols-3">
    {
        posts.slice(0,10).map((p,i) => <div key={i} className="card w-96 glass">
        <figure><img src={p.url} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title"> {p.title} </h2>
         
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>)
    }
    </div>

   </div>
  );
};

export default AllPost;
