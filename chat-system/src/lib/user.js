import axios from "axios";
import api from "./index.js";
import { toast } from "react-toastify";

const handleLogin = async (data) => {
  try {
    const response = await api.post("/login", data);
    // Handle successful login
    console.log(response.data);
    return response.data.uid
  } catch (error) {
    // Handle login error
    const { response } = error;
    if (response.status === 401) throw { message: response.data.error };
    throw error;
  }
};
const handleSignUp = async (data) => {
  try {
    const response = await api.post("/signup", data);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    const { response } = error;
    console.log(response);
    throw new Error(response.data.error);
  }
};


export { handleLogin, handleSignUp };
