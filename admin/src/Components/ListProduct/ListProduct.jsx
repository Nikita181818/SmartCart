
// import './ListProduct.css'
// import  React,{ useState ,useEffect} from 'react'
// import cross_icon from '../../assets/cross_icon.png'
// import allproducts from '../../assets/all_product.js'

// const ListProduct = () => {
//     const  [allproducts,setallproducts]=useState([]);
     
//     const fetchInfo=async ()=>{
//         await fetch('http://localhost:4000/allproducts')
//         .then((res)=>res.json())
//         .then((data)=>{setallproducts(data)});
//     }
//     useEffect(()=>{
//         fetchInfo();
//     },[]);

//   return (
//     <div className='list-product'>
//       <h1>All Products List..</h1>
//       <div className="listproduct-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old_Price</p>
//         <p>New_Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="lisproduct-allproducts">
//         <hr/>
// {allproducts.map((product,index)=>{
//     return <> <div key={index}  className="listproduct-format-main listproduct-format">
//         <img src={product.image} alt="" className="listproduct-product-icon" />
//         <p>{product.name}</p>
//         <p>${product.old_price}</p>
//         <p>${product.new_price}</p>
//         <p>{product.category}</p>
//         <img src={cross_icon} alt="" className="listproduct-remove-icon" />
//     </div>
//     <hr/>
//     </>
// })}
//       </div>
//     </div>
//   )
// }

// export default ListProduct;
import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4000/allproducts');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product= async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept:'application/json',
            },
            body:JSON.stringify({id:id})
        })
         await fetchInfo();
    }

    const removeProduct = (id) => {
        // Logic to remove a product (e.g., call an API to delete)
        // Update the state to remove the product from the list
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className='list-product'>
            <h1>All Products List..</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="lisproduct-allproducts">
                <hr />
                {products.map((product) => (
                    <div key={product.id} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt={product.name} className="listproduct-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img
                            src={cross_icon}
                            alt="Remove"
                            className="listproduct-remove-icon"
                            onClick={() => removeProduct(product.id)}
                        />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
