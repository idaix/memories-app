import { useSelector } from "react-redux"
import { CircularProgress } from '@mui/material'
import Post from "./Post/Post"

const Posts = () => {

  const posts = useSelector((state) => state.posts);
  console.log("posts...");
  console.log(posts);
  return (
    <div className="">
      {!posts.length ?
      (
        <div className="w-full text-center">
          <CircularProgress />
        </div>
      ):(
        <div>
          {posts.map(post=>(
            <Post key={post._id} post={post} />
          ))}
        </div>      
      )}
    </div>
  )
}

export default Posts