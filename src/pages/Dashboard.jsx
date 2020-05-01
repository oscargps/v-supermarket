import React  from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import './style/Dashboard.css'
const Dashboard = () =>{
    return(
        <div>
        <Header/>
        <div className="Dashboard">
            <div>
                <h1>Nombre de mi negocio </h1>
            </div>
            <button className="btn_add">+</button>
            <div>
                <h2>Mis Productos</h2>
                <div className="Products">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default Dashboard