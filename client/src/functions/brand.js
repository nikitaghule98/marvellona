import axios from "axios";

export const getBrands = async () =>
  await axios.get(`${process.env.REACT_APP_API}/brands`);

export const getBrand = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/brand/${slug}`);

export const removeBrand = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/brand/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateBrand = async (slug, brand, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/brand/${slug}`, brand, {
    headers: {
      authtoken,
    },
  });

export const createBrand = async (brand, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/brand`, brand, {
    headers: {
      authtoken,
    },
  });
