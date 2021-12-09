import React from 'react'

const NotFound = () => {
    return (
        <div className="my-3">
            <img src={require('../assets/images/404.gif').default} alt="Notfound" className="rounded mx-auto d-block"/>
        </div>
    )
}

export default NotFound