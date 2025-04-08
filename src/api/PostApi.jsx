import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// Get Method

export const getPost = () => {
  return api.get('/posts');
};

// Delete Method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//Post Method -> Add post in posts  
export const postData = (post) => {
  return api.post('/posts', post);
};

// Put Method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
