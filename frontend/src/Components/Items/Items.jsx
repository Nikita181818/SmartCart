import './Items.css';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {
  if (!item || !item.id) {
    return null; // Handle the case where item or item.id is undefined
  }

  const url = `/product/${item.id}`;

  return (
    <div className="item">
      <Link to={url} onClick={() => window.scrollTo(0, 0)}>
        <img src={item.image} alt={item.name} className="item-image" />
      </Link>
      <h3>{item.name}</h3>
      <div className="item-cost">
        <div className="item-cost-new">₹{item.new_price}</div>
        <div className="item-cost-old">₹{item.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
