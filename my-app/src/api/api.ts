import react from 'react'
import axios from 'axios'

export const saveProduct = async (data) => {
    try {
        const resp = await axios.post("http://localhost:3003/upload", data) // PATH FROM ENV
    } catch (error) {
        console.error(error)
    }
}

