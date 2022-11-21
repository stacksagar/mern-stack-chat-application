import Axios from 'axios';

const axios = Axios.create();

axios.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('token');

    config.headers['Authorization'] = 'Bearer ' + authToken;
    return config;
  },
  (error) => Promise.reject(error)
);

export const auth = async () => {
  const res = await axios.get('/api/protected');
  return res.data;
};

export const signup = async (data) => {
  const res = await axios.post('/api/signup', data);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post('/api/login', data);
  return res.data;
};

export const getAllUsers = async ({ id, search }) => {
  const res = await axios.get(`/api/users/${id}?search=${search || ''}`);
  return res.data;
};

export const setAvatar = async ({ id, imgUrl }) => {
  const res = await axios.put(`/api/setavatar/${id}`, { imgUrl });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`/api/delete/${id}`);
  return res.data;
};

export const sendMessage = async (data) => {
  const res = await axios.post('/api/addmsg', data);
  return res.data;
};

export const getMessage = async (data) => {
  const res = await axios.post('/api/getmsg', data);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`/api/user/${id}`);
  return res.data;
};
