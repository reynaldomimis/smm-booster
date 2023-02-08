import axios from "axios";

const apiUrl = "https://smmengineer.com/api/v2";
const apiKey = "cb3a91725000111b05d41aa055636e58";

export const order = async (data) => {
  const postData = {
    ...data,
    key: apiKey,
    action: "add",
  };
  const response = await axios.post(apiUrl, postData);
  return response.data;
};

export const status = async (orderId) => {
  const response = await axios.post(apiUrl, {
    key: apiKey,
    action: "status",
    order: orderId,
  });
  return response.data;
};

export const multiStatus = async (orderIds) => {
  const response = await axios.post(apiUrl, {
    key: apiKey,
    action: "status",
    orders: orderIds.join(","),
  });
  return response.data;
};

export const services = async () => {
  const response = await axios.post(apiUrl, {
    key: apiKey,
    action: "services",
  });
  return response.data;
};

export const balance = async () => {
  const response = await axios.post(apiUrl, {
    key: apiKey,
    action: "balance",
  });
  return response.data;
};
