import axios from "axios";

export async function getData(){
    try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=br&apiKey=e402afe352254fefaddb16399edd3e14")
        return res;
    } catch (error) {
        throw error;
    }
}