import React, {useEffect , useState} from 'react'
import axios from 'axios'

function ProductDetails() {
    //Variables
    const apiURI = "http://localhost:8080/products/"
    const [data, setData] = useState([]);

    //Methods
    const getMethod = async () => {
        let productId = new URLSearchParams(window.location.search).get("id");
        await axios(apiURI+productId).then(response=>{
            setData([response.data]);
        })
        .catch(error=>{
            console.log(error);
        })}
        useEffect(() =>{
            getMethod();
        },
        [setData]
    );

    function getCoinText(price) {
        let result;
        let thousand = parseInt(price/1000);
        let hundred = parseInt(price%1000);
        if(hundred===0) result= '$'+thousand+'.'+hundred+'00';
        else result = '$'+thousand+'.'+hundred;
        return result;
    }

    return (
        <div className="caina-container">
            {
                data.map((product) => (
                    <div className="card w-50 mx-auto my-4" key={product.id}>
                        <div className="card-header">
                            <h3 className="text-center">{product.name}</h3>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <img src={require(`../assets/images/${product.imagepath}`).default} className="card-img-top" alt=""/>
                            </div>
                            <h4 className="card-title text-center text-uppercase">{getCoinText(product.price)}</h4>
                            <h6 className="card-text">Stock: {product.quantity}</h6>
                            <p className="card-text caina-text-justify">{product.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductDetails
