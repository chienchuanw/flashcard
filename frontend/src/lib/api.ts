import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/apis";

export const fetchMessage = async () => {
  try {
    const response = await axios.get(`${API_URL}/hello/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "API error" };
  }
};
