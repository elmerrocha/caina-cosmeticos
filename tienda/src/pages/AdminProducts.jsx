import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import Swal from 'sweetalert2'
import * as ReactBootStrap from "react-bootstrap";

function Products() {
    //Variables
    const apiURI = "http://localhost:8080/products/";
    const [data, setData] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({
        "name" : "",
        "description" : "",
        "quantity" : 0,
        "price" : 0,
        "category" : "",
        "imagepath" : ""
    })
    const [addNewProduct, setAddNewProduct] = useState({
        "name" : "",
        "description" : "",
        "quantity" : 0,
        "price" : 0,
        "category" : "",
        "imagepath" : ""
    })
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

    const postMethod = async () => {
        await axios.post(apiURI, selectedProduct)
        .catch(error=>{
            console.log(error);
        })
        getMethod();
        statusEditModal();
    }

    const addMethod = async () => {
        await axios.post(apiURI, addNewProduct)
        .catch(error=>{
            console.log(error);
        })
        getMethod();
        statusAddModal();
    }

    const getByCategory = async (category) => {
        await axios(apiURI+'category/'+category).then(response=>{
            setData(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const deleteMethod = async () => {
        await axios.delete(apiURI+selectedProduct.id)
        .then(response =>{
            setData(data.filter(product=>product.id!==selectedProduct.id));
            statusDeleteModal();
            Swal.fire("Eliminado", "", "warning")
        }).catch(error =>{
            console.log(error);
        })
    }

    const selectProduct = (element,edit) => {
        setSelectedProduct(element);
        (edit==="Edit")?statusEditModal():statusDeleteModal();
    }

    const addProduct = () => {
        setAddNewProduct({
            "name" : "",
            "description" : "",
            "quantity" : null,
            "price" : null,
            "category" : "",
            "imagepath" : ""
        });
        statusAddModal();
    }

    const statusEditModal = () => {
        setEditModal(!editModal);
    }

    const statusDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }

    const statusAddModal = () => {
        setAddModal(!addModal);
    }

    const [searchData, setSearchData] = useState({
        box:"",
        filter:"1"
    });

    const handleChange = change => {
        const{name, value} = change.target;
        setSelectedProduct((prevState)=>({
            ...prevState,
            [name]:value
        }));
    }

    const handleAddChange = change => {
        const{name, value} = change.target;
        setAddNewProduct((prevState)=>({
            ...prevState,
            [name]:value
        }));
    }

    const handleInputChange = (event) => {
        setSearchData({
            ...searchData,
            [event.target.name]:event.target.value
        });
    }

    const handleCategoryChange = (event) => {
        // getByCategory();
        getByCategory(event.target.value);
        // console.log(event.target.value);
    }

    const refreshProducts = () => {
        document.getElementById("filt").value="0";
        document.getElementById("cat").value="cat";
        getMethod();
    }

    const searchProduct = async () => {
        switch(searchData.filter) {
            case "1"://ID
                await axios.get(apiURI+searchData.box)
                .then(response => {
                    if(response.data !== null) setData(response.data);
                    else Swal.fire("¡No hay resultados!","","info");

                })
                .catch(error => {
                    console.log(error);
                });
                break;
            case "2"://Name
                await axios.get(apiURI+'name/'+searchData.box)
                .then(response => {
                    if(response.data.length !== 0) setData(response.data);
                    else Swal.fire("¡No hay resultados!","","info")
                })
                .catch(error => {
                    console.log(error);
                });
                break;
            case "3"://Price
                await axios.get(apiURI+'price/'+searchData.box)
                .then(response => {
                    if(response.data.length !== 0) setData(response.data);
                    else Swal.fire("¡No hay resultados!","","info")
                })
                .catch(error => {
                    console.log(error);
                });
                break;
            default:
                break;
        }
    }



    return (
        <div className="mt-3">
            <ReactBootStrap.Form className="mb-2">
                <ReactBootStrap.Row className="my-1">
                    <ReactBootStrap.Col xs="auto">
                        <ReactBootStrap.Form.Select name="filter" onChange={handleInputChange} id="filt">
                            <option value="0" select="true" hidden>Filtro</option>
                            <option value="1">Id</option>
                            <option value="2">Nombre</option>
                            <option value="3">Precio</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto">
                        <ReactBootStrap.Form.Control name="box" onChange={handleInputChange} placeholder="Búsqueda"/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto">
                        <ReactBootStrap.Button onClick={()=>searchProduct()}><i className="bi bi-search"></i> Buscar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="ms-5">
                        <ReactBootStrap.Form.Select name="categ" onChange={handleCategoryChange} id="cat">
                            <option value="cat" select="true" hidden>Categoría</option>
                            <option value="Eyes">Eyes</option>
                            <option value="Lips">Lips</option>
                            <option value="Face">Face</option>
                            <option value="Nails">Nails</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto">
                        <ReactBootStrap.Button className="btn-secondary ms-5" onClick={()=>refreshProducts()}><i className="bi bi-arrow-clockwise"></i> Recargar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col className="d-md-flex justify-content-md-end">
                        <ReactBootStrap.Button className="btn-success me-2" onClick={()=>addProduct()}><i className="bi bi-plus"></i> Agregar Producto</ReactBootStrap.Button>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Form>

            <table className="table table-hover table-bordered">
                <thead className="caina-navbar">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product) =>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.imagepath}</td>
                                <td className="col d-flex justify-content-center">
                                    <button className="btn btn-primary me-2" onClick={()=>selectProduct(product,"Edit")}><i className="bi bi-pencil-fill"></i> Editar</button>
                                    <button className="btn btn-danger" onClick={()=>selectProduct(product)}><i className="bi bi-trash-fill"></i> Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={editModal}>
                <ModalTitle>
                    <h2>Editar producto</h2>
                </ModalTitle>
                <ModalBody>
                    <div className="form-group">
                        <label>Id</label>
                        <input className="form-control" readOnly type="text" value={selectedProduct.id}/>
                        <br/>
                        <label>Nombre</label>
                        <input className="form-control" type="text" name="name" value={selectedProduct.name} onChange={handleChange}/>
                        <br/>
                        <label>Descripción</label>
                        <input className="form-control" type="text" name="description" value={selectedProduct.description} onChange={handleChange}/>
                        <br/>
                        <label>Cantidad</label>
                        <input className="form-control" type="number" name="quantity" value={selectedProduct.quantity} onChange={handleChange}/>
                        <br/>
                        <label>Precio</label>
                        <input className="form-control" type="number" name="price" value={selectedProduct.price} onChange={handleChange}/>
                        <br/>
                        <label>Categoría</label>
                        {/* <input className="form-control" type="text" name="category" value={selectedProduct.category} onChange={handleChange}/> */}
                        <select className="form-control" name="category" value={selectedProduct.category} onChange={handleChange}>
                            <option value="Eyes">Eyes</option>
                            <option value="Lips">Lips</option>
                            <option value="Face">Face</option>
                            <option value="Nails">Nails</option>
                        </select>
                        <br/>
                        <label>Imagen</label>
                        <input className="form-control" type="text" name="imagepath" value={selectedProduct.imagepath} onChange={handleChange}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>postMethod()}>Actualizar</button>
                    <button className="btn btn-danger" onClick={()=>statusEditModal()}>Cancelar</button>
                </ModalFooter>
            </Modal>

            <Modal show={deleteModal}>
                <ModalTitle>
                    <h2>Eliminar producto</h2>
                </ModalTitle>
                <ModalBody>
                    ¿Esta seguro que desea eliminar {selectedProduct.name}?
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>deleteMethod()}>Si</button>
                    <button className="btn btn-secondary" onClick={()=>statusDeleteModal()}>No</button>
                </ModalFooter>
            </Modal>

            <Modal show={addModal}>
                <form onSubmit={()=>addMethod()}>
                    <ModalTitle>
                        <h2>Agregar producto</h2>
                    </ModalTitle>
                    <ModalBody>
                        <div className="form-group">
                        <label>Nombre</label>
                            <input className="form-control" type="text" name="name" value={addNewProduct.name} onChange={handleAddChange} required/>
                            <br/>
                            <label>Descripción</label>
                            <input className="form-control" type="text" name="description" value={addNewProduct.description} onChange={handleAddChange}/>
                            <br/>
                            <label>Cantidad</label>
                            <input className="form-control" type="number" name="quantity" value={addNewProduct.quantity} onChange={handleAddChange} required/>
                            <br/>
                            <label>Precio</label>
                            <input className="form-control" type="number" name="price" value={addNewProduct.price} onChange={handleAddChange} required/>
                            <br/>
                            <label>Categoría</label>
                            <select className="form-control" name="category" value={addNewProduct.category} onChange={handleAddChange} required>
                                <option value="" select="true" hidden></option>
                                <option value="Eyes">Eyes</option>
                                <option value="Lips">Lips</option>
                                <option value="Face">Face</option>
                                <option value="Nails">Nails</option>
                            </select>
                            <br/>
                            <label>Imagen</label>
                            <input className="form-control" type="text" name="imagepath" value={addNewProduct.imagepath} onChange={handleAddChange} required/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <input type="submit" className="btn btn-primary" value="Agregar"/>
                        <button className="btn btn-danger" onClick={()=>statusAddModal()}>Cancelar</button>
                    </ModalFooter>
                </form>
            </Modal>

        </div>
    )
}

export default Products
