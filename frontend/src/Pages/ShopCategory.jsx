import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import './CSS/ShopCategory.css';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Items from "../Components/Items/Items";


const ShopCategory = ({category,banner}) => {
const {all_products} = useContext(ShopContext);
console.log("all products:" , all_products);
const category_wise_products = all_products.filter(product => product.category === category);
     console.log(category_wise_products);

    return ( 
        <div className="shop-category">
            
            <img src= {banner} alt="banner image" className="shopcategory-banner" />

            <div className="shopcategory-index-sort">
                <p>showing 1-12 out of 36 products</p>
                <div className="shopcategory-sort">
                    Sort by <img src= {dropdown} alt="dropdown" />             
                </div>
            </div>

            <div className="shopcategory-products">
                {category_wise_products.map((item,i) =>{
                    return  <Items key = {item.id} item = {item} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore more
            </div>

        </div>
     );
}
 
export default ShopCategory;