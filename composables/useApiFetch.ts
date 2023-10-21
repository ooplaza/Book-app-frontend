import axios from "axios";

export function useApiFetch(){
    return axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}