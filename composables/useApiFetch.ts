import axios from "axios";

export function useApiFetch(){
    return axios.create({
        baseURL: 'https://readcartapi-server.vercel.app/',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}