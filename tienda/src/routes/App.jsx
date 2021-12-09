import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminProducts from '../pages/AdminProducts';
import About from "../pages/About";
import MissionVission from "../pages/MissionVission";
import Objectives from "../pages/Objectives";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import EyesProducts from "../pages/products/EyesProducts";
import LipsProducts from "../pages/products/LipsProducts";
import FaceProducts from "../pages/products/FaceProducts";
import NailsProducts from "../pages/products/NailsProducts";
import ProductDetails from "../pages/ProductDetails";

function App() {
  return (
    <Layout>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin/products" element={<AdminProducts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mission-vision" element={<MissionVission/>}/>
        <Route path="/objectives" element={<Objectives/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/eyes" element={<EyesProducts/>}/>
        <Route path="/products/lips" element={<LipsProducts/>}/>
        <Route path="/products/face" element={<FaceProducts/>}/>
        <Route path="/products/nails" element={<NailsProducts/>}/>
        <Route path='/products/details' element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Layout>
  );
}

export default App;
