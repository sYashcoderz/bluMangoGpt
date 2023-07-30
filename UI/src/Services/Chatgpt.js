import Axios from "axios";

const API_BASE = "http://localhost:8080";

export const Requestchatgpt = async (data) => {
    try {
        console.log("hurrr",data);
        const response = await Axios.post(API_BASE + '/chatgpt', data)
        if (response) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        return { error }
    }
}