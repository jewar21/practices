import React, { useState, useEffect } from 'react'
import '../../styles/Login.css'
import axios from 'axios'
import {WEB} from '../../utils/constants'
import md5 from 'md5'
// import Cookies from 'universal-cookie'


export default function Login () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: ''
    })
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    
    const iniciarSesion = async () => {
        await axios.post(WEB, {params: {
            name: formData.name,
            email: formData.email, 
            password: md5(formData.password)}})
            .then(response=>{
                console.log(response)
                return response.data
            })
            .catch(error=>{
                return error
            })
    }
        return (
            <div className="ContainerPrincipal">
                <form className="ContainerS">
                <input 
                        type="text" 
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                    />
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary"  onClick={() => iniciarSesion()} type="button" >Crear Cuenta</button>
                </form>
                    
            </div>
        )
}
