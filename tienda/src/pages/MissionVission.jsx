import React from 'react'

function MissionVission() {
    return (
        <div className="caina-container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={require('../assets/images/makeup-brushes.jpg').default} className="img-fluid rounded-start" alt="Maquillaje"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Misión</h1>
                            <p className="card-text caina-text-justify">Caina cree en la verdadera belleza, sin estereotipos, viviendo con empoderamiento y celebrando nuestras diferencias.</p>
                            <p className="card-text caina-text-justify">Cada día ayudamos a construir una comunidad donde se respeta la diversidad, los gustos y los pensamientos, además con la firme convicciónde que el maquillaje y en sí la belleza, solo es una forma de expresión para sentirnos bien y felices</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Visión</h1>
                            <p className="card-text caina-text-justify">Consolidarnos como una empresa líder en Colombia en la industria del maquillaje y la belleza para el 2022, a través de la inspiración, educación, calidad de nuestros productos y servicios.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={require('../assets/images/cosmetics.jpg').default} className="img-fluid rounded-start" alt="Maquillaje"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVission
