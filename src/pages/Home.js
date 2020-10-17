import React, { useEffect,useState } from 'react';
import { get } from '../services/http';
import '../productGrid.css'
import ProductItem from '../components/product/item';
const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        getProducts()
    },[])
    const getProducts = async () =>{
        let prods = await get();
        console.log(prods)
        setProduct( prods )
    }
    return (
    <div className="container">
        <div className="row">
            {
                product.map(item => (
                    <div key={item.id} className="col-md-4 col-sm-6">
                        <ProductItem item = { item } />
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default Home;