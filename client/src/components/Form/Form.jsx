import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { Button, TextField } from '@mui/material'
import Input from '../Input'
import FileBase from 'react-file-base64'
import { createPost } from '../../actions/posts'


const Form = () => {
  const [postData, setPostData] = useState({ creator:'', title:'', message: '', tags: '', selectedFile: '' });

  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Create...");
    console.log(postData);
    dispatch(createPost(postData))
  }
  return (
    <div className='p-3 bg-white rounded-md shadow-sm'>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h1 className='text-slate-900 font-bold mb-1 pb-1 border-b-2'>Post a memory</h1>
        <Input type='text' name='creator' label="Creator" value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value }) } />
        <Input type='text' name='title' label="Title" value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value }) }/>
        <Input type='text' name='message' label="Message" value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value }) }/>
        <Input type='text' name='tags' label="Tags" value={postData.tags} onChange={(e)=> setPostData({ ...postData, tags: e.target.value }) }/>

        <div className="mt-1 mb-3 border-b-2 p-1">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64)=>setPostData({ ...postData, selectedFile: base64.base64 })}
          />
        </div>
        <Button type="submit" fullWidth color='primary' variant='contained' size='large'>Post</Button>
      </form>
    </div>
  )
}

export default Form