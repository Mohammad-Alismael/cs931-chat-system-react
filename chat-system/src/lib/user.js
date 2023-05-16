import axios from "axios";
import api from "./index.js";
import { toast } from "react-toastify";

const handleLogin = async (data) => {
  try {
    const response = await api.post("/login", data);
    // Handle successful login
    console.log(response.data);
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
    // Handle successful login
    console.log(response.data);
  } catch (error) {
    // Handle login error
    console.error(error);
  }
};

export { handleLogin, handleSignUp };
