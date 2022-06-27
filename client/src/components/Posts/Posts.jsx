import { useSelector } from "react-redux"

import Post from "./Post/Post"

const Posts = () => {

  const posts = useSelector((state) => state.posts);
  console.log("posts...");
  console.log(posts);
  return (
    <div className="bg-white p-3 rounded-sm shadow-sm">
        <Post />
        <Post />
        <Post />
        <Post />
    
    </div>
  )
}

export default Posts