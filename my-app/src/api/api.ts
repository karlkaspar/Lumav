import react from 'react'
import axios from 'axios'

export const saveProduct = async (data) => {
    try {
        const resp = await axios.post('http://localhost:3003/upload', data) // PATH FROM ENV
    } catch (error) {
        console.error(error)
    }
}


export const deleteProduct = async (id) => {
    try {
        const resp = await axios.get('http://localhost:3003/delete?id=' + id);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};