import React from 'react'

function Contact() {
    return (
        <div className="caina-container">
            <div className="row">
                <h1>Contáctanos</h1>
                <form action="/" id="formulario">
                    <div className="mb-3">
                        <label form="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre Apellido"/>
                    </div>
                    <div className="mb-3">
                        <label form="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre.apellido@correo.com"/>
                    </div>
                    <div className="mb-3">
                        <label form="exampleFormControlTextarea1" className="form-label">Detalles</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col mb-3">
                        <button className="btn btn-primary" type="submit" form="formulario" value="Submit">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="row">
                <img src={require('../assets/images/eyeshadow.jpg').default} alt="EyeShadow"/>
            </div>
        </div>
    )
}

export default Contact
