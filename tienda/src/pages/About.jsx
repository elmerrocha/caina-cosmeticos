import React from 'react'

function About() {
    return (
        <div className="caina-container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Quienes somos</h1>
                            <p className="card-text caina-text-justify">Somos una empresa familiar que se especializa en el suministro al por mayor y al detal de productos de belleza.</p>
                            <p className="card-text caina-text-justify">Trabajamos con esmero para proveer cosméticos de calidad a los mejores precios disponibles en línea. Hemos estado en el mercado desde el 2018 y hemos forjado relaciones sólidas con algunos de los distribuidores y fabricantes de cosméticos lo que nos permite ofrecer la mejor combinación de artículos a precios más bajos.</p>
                            <p className="card-text caina-text-justify">Nos orgullecemos de nuestro servicio al cliente y nuestros rápidos tiempos de respuesta. Todos los correos son contestados de manera rápida y eficiente y todas las llamadas y mensajes de chat son contestados por varios asesores durante nuestro horario de trabajo.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={require('../assets/images/tools.jpg').default} className="img-fluid rounded-start" alt="Tools"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
