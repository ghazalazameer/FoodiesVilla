import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{
const{resId}=useParams();  

const resInfo=userestaurantMenu(resId);

if(resInfo===null) return <Shimmer/>;


const {name,cuisines,sla}=resInfo?.cards[2]?.card?.card?.info;

const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{sla}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((itemCard) => (
                    <li>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;