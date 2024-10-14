import new_collection_array from "../Assets/new_collections";
import Item from "../Items/Items.jsx";
import './NewCollections.css';
const New_collection = () => {
    return ( 
        <div className="new_collection">
            <div className="new_collection_heading">
                <h1>NEW COLLECTION</h1>
                <hr />
            </div>
            <div className="new_collection_items">
                {new_collection_array.map((collection,i)=>{
                    return <Item key = {collection.id} item = {collection} id = {i} />
                })}
            </div>
        </div>
    );
};
 
export default New_collection;