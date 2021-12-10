import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function LipsProducts() {
    //Variables
    const apiURI = "http://132.226.211.168:8080/products/category/Lips"
    const [data, setData] = useState([]);

    //Methods
    const getMethod = async () => {
        await axios(apiURI).then(response=>{
            setData(response.data);
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
            <h1 className="text-center mb-5">Labios</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    data.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <img src={require(`../../assets/images/${product.imagepath}`).default} className="card-img-top" alt=""/>
                                <h4 className="text-center">{getCoinText(product.price)}</h4>
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase">{product.name}</h5>
                                    {/* <p className="card-text caina-text-justify">{product.description}</p> */}
                                </div>
                                <Link type="button" className="btn btn-primary mx-4 mb-2" to={`/products/details/?id=${product.id}`}>Detalles</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LipsProducts
