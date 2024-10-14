import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import star_icon from './../Assets/star_icon.png';
import star_dull_icon from './../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
    const { addProductToCart } = useContext(ShopContext);

    function addToCart(id){
        console.log("This is the product id",id);

        addProductToCart(id);
    }
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>(1022)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    <p>{product.description}</p>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className="productdisplay-right-size-item">S</div>
                        <div className="productdisplay-right-size-item">M</div>
                        <div className="productdisplay-right-size-item">L</div>
                        <div className="productdisplay-right-size-item">XL</div>
                        <div className="productdisplay-right-size-item">XXL</div>
                    </div>
                </div>
                <button onClick = {()=> addToCart(product.id)} className='productdisplay-button'>Add to Cart</button>
                <p className="productdisplay-right-category">
                    <span>Category :</span> {product.category ? product.category : "Not Available"}
                </p>
                <p className="productdisplay-right-category">
                    <span>Brand :</span> {product.brand ? product.brand : "Not Available"}
                </p>
                <p className="productdisplay-right-category">
                    <span>Product Code :</span> {product.id}
                </p>
                <p className="productdisplay-right-category">
                    <span>Availability :</span> {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags :</span> {product.tags ? product.tags : "Not Available"}
                </p>

            </div>
        </div>
    );
}

export default ProductDisplay;