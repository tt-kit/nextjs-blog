import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('http://localhost:8080/article/latest');
  return response.data;
};
