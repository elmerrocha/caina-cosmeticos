import React from 'react'

function Objectives() {
    return (
        <div className="caina-container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={require('../assets/images/cosmetics4.jpg').default} className="img-fluid rounded-start" alt="Cosmetics4"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Objetivos Corporativos</h1>
                            <ul className="list-unstyled">
                                <li className="card-title caina-text-justify">En Caina Cosméticos basamos nuestra práctica en valores fundamentales para compartir el éxito contigo. Los valores que nos caracterizan son:</li>
                                <ul>
                                    <li>Integridad</li>
                                    <li>Honestidad</li>
                                    <li>Respeto</li>
                                    <li>Claridad</li>
                                    <li>Cortesía</li>
                                    <li>Ética</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Objectives
