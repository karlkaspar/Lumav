import * as React from "react"

import { saveProduct } from '../../api/api'
import { useState } from "react"

const AddProduct = () => {
    const [formData, updateFormData] = useState(null)

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: (e.target.type == 'file') ? e.target.files[0] : e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataToSend = new FormData() // I use this because then I can send images and form field data at the same time, Multipart content type
        dataToSend.append("name", formData.name)
        dataToSend.append("price", formData.price)
        dataToSend.append("img", formData.img)

        saveProduct(dataToSend);
    };

    return (
        <div className="addProduct">
            <div className="inner">
                <input type="file" name="img" placeholder='Product Image' onChange={handleChange} />
                <input type="text" name="name" placeholder='Product Name' onChange={handleChange} />
                <input type="text" name="price" placeholder='Product Price' onChange={handleChange} />
                <button type='button' onClick={handleSubmit}>Add new product</button>
            </div>
        </div>)
}

export default AddProduct