import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
// import all_products from "../Assets/all_product.js";
import Item from "../Items/Items.jsx";
import './RelatedProduct.css';


function getRelatedProductsFromCategory(category,all_products) {
    const same_category_products = all_products.filter(product=> product.category === category);
    console.log("same category products:");
    console.log(same_category_products);
    const len = same_category_products.length;
    console.log(len);
    //generate 4 numbers between range len
    let random_set = new Set();
    const related_products = [];
    const related_products_ids = [];
    while(random_set.size <4 && same_category_products.length > 0){
        const random_num = Math.floor(Math.random()*len);
        if(random_set.has(random_num)){
            continue;
        }
        random_set.add(random_num);
        related_products.push(same_category_products[random_num]);
        related_products_ids.push(same_category_products[random_num].id);

    }
    console.log("related products:",related_products);
    console.log("related_products_id",related_products_ids);
    return related_products;
}

const RelatedProducts = ({category}) => {
    const {all_products} = useContext(ShopContext);
    //ab humei all_products mei se related products vaala array chahiye jiske liyehumne alag function likh diya
    const related_products_array = getRelatedProductsFromCategory(category,all_products);
    return ( 
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {related_products_array.map((item,i) =>{
                    return <Item key = {i} id={item.id} name={item.name} image={item.image} />
                })}
            </div>
        </div>
     );
}
 
export default RelatedProducts;