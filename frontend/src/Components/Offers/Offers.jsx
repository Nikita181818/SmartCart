import offer_image from './../Assets/exclusive_image.png';
import './Offers.css'
const Offers = () => {
    return ( 
        <div className="offer">
            <div className="left">
                <h1 className='offer-heading'> Exclusive</h1>
                <h1 className='offer-heading'> Only For You</h1>
                <p className='offer-para'>ON THE BEST SELLERS</p>
                <button>Check them out</button>
            </div>
            <div className="right">
                <img src= {offer_image} alt="offer_image"  className='offer_image'/>
            </div>

        </div>
     );
}
 
export default Offers;