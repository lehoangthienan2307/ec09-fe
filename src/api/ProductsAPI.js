import axios from 'axios';

export const getProducts = ( CatID,page, sort) => {
  return `/product?CatID=${CatID}&page=${page}&sort=${sort}`;
};
export const searchProducts = ( word) => {
  return `/product/search/${word}`;
};

export const getOneProduct = (ProID) => {
  return `/product/${ProID}`;
};



export const filterProducts = (filter, value, sort) => {
  return `/products?price[${filter}]=${value}&sort=${sort}`;
};

export const createProduct = async (data) => {
  return axios.post('/products', data)
};

export const updateProduct = async (data) => {
  return axios.put(`/products/${data.id}`, data)
};

export const deleteProduct = async (id) => {
  return axios.delete(`/products/${id}`)
};

