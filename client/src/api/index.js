import axios from 'axios'

const url = 'http://localhost:5000/posts';


export const fetchApi = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)