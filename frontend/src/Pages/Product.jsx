// import { useParams } from "react-router-dom";
// import Breadcrums from "../Components/Breadcrums/Breadcrums.jsx";
// import { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
// import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
// import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
// const Product = () => {
//   const { id } = useParams();
//   const {all_products} = useContext(ShopContext);
//   // console.log(all_products);
//   // console.log(id);
//   const single_product_array = all_products.filter((product) => product.id === id);
//   //filter always returns an array
//   const single_product = single_product_array[0];
//   console.log(single_product);
//   console.log(single_product.category);
//   return (
//     <>
//       {/* <h1>Product page : {id}</h1> */}
//       <Breadcrums product={single_product} />
//       <ProductDisplay product={single_product} />
//       <DescriptionBox/>
//       <RelatedProduct category = {single_product.category} />
//     </>
//   );
// };

// export default Product;
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums.jsx";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";


const Product = () => {
  
  const { all_products } = useContext(ShopContext);
  const { id } = useParams();
  console.log(all_products);

  const single_product_array = all_products.filter((product) => product.id === Number(id));
  const single_product = single_product_array[0];
  // console.log("single product is",single_product);

  // Check if single_product is undefined
  if (!single_product) {
    return <div>Product not found</div>; // Or a loading spinner, etc.
  }
  console.log(single_product);

  return (
    <>

      <Breadcrums product={single_product} />
      {/* <Product product={single_product}/> */}
      <ProductDisplay product={single_product} />
      <DescriptionBox />
      <RelatedProduct category={single_product.category} />
    </>
  );
};

export default Product;
