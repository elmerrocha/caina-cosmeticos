import React from 'react'

function Home() {
    return (
        <div className="caina-container">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../assets/images/cosmetics2.jpg').default} className="d-block w-100" alt="Cosmetics2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/paint-brush.jpg').default} className="d-block w-100" alt="Paint Brush"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/eye-shadows.jpg').default} className="d-block w-100" alt="Eye Shadows"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/lipstick.jpg').default} className="d-block w-100" alt="Lipstick"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/cosmetics3.jpg').default} className="d-block w-100" alt="Cosmetics3"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/shadows.jpg').default} className="d-block w-100" alt="Shadows"/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../assets/images/lipstick-colors.jpg').default} className="d-block w-100" alt="Lipstick color"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home
