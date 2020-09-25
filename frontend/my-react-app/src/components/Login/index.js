import React, { Component } from 'react'
import '../../styles/Login.css'
import axios from 'axios'
import WEB from '../../utils/constants'


export default class Login extends Component {
    state = {
        form: {
            email: '',
            password: '',
        }
    }

    handleChange= async e=>{
        await this.setState({
            from:{
                ...this.state.from,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.from)
    }
    render() {
        return (
            <div className="ContainerPrincipal">
                <form className="ContainerS">
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-primary">Iniciar Sesión</button>
                    <button className="btn btn-primary">Crear Cuenta</button>
                </form>
                    
            </div>
        );        
    }
}
