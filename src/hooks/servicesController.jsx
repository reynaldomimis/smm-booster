import axios from "axios";
const baseURL = process.env.REACT_APP_SERVICES_URL;
const privateKey = process.env.REACT_APP_SERVICES_KEY;

const servicesController = axios.create({
  baseURL: "/api/v2",
  params: {
    key: `cb3a91725000111b05d41aa055636e58`,
    action: "services",
  },
});

export default servicesController;
