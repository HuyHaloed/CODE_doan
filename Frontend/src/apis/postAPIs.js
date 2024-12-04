import { axiosInstance } from './axiosInstance';

export const register = async (data) => {
  console.log(data);

  const response = await axiosInstance.post(`/auth/signup`, data);

  return response.data;
}

export const login = async (data) => {
  const response = await axiosInstance.post(`/auth/login`, data);

  return response.data;
}

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');

  return response.data;
}
