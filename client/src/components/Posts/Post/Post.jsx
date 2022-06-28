import moment from 'moment'

const Post = ({ post }) => {
  return (
    <div className="bg-white overflow-hidden rounded p-2 mb-3 shadow-sm relative">
        
        {post.selectedFile&&(
          <img class="w-full" src={post.selectedFile} alt={post.title}></img>
        )}
        <div className="px-6">
          <p class="text-md font-bold text-slate-600">{post.creator}</p>
          <p class="text-xs text-slate-400">{moment(post.createdAt).fromNow()}</p>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{post.title}</div>
          <p class="text-gray-700 text-base">{post.message}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {post.tags&&(
            post.tags.map(tag=>(
              <span key={tag} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))
          )}
          </div>
    </div>
  )
}

export default Post