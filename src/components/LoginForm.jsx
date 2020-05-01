import React, {Component} from 'react'
import './style/LoginForm.css'

class LoginForm extends Component{
    render(){
        return(
            <div className="LoginForm">
                <h1>Registra tu negocio</h1>
                <section className="LoginForm__image">
                    Sube la imagen de tu negocio
                </section>
                <form>
                    <input type="text" placeholder="Nombre de tu negocio" required/>
                    <input type="text" placeholder="Telefono de contacto" required/>
                    <input type="text" placeholder="Direccion de tu negocio" required/>
                    <select name="" id="">
                        <option value="">Sector comercial..</option>
                    </select>
                    <select name="" id="">
                        <option value="">Ciudad..</option>
                    </select>

                    <button className="LoginForm__button">Registrar mi negocio!</button>
                </form>
            </div>
        )
    }
}

export default LoginForm