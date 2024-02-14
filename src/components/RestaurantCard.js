import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;    // Destructuring props object

    const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
        <img className="rounded-lg" alt ="res-logo" src ={CDN_URL + cloudinaryImageId} /> 
        <h3 className="font-bold py-4">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo} FOR TWO</h4>
        <h4>{sla?.slaString}</h4>
        </div>
    );
  };

  // Higher order component
  // input - RestaurantCard =>> RestaurantCarddPromoted
  export const withPromotedLabel = (RestaurantCard)=>{
    return()=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-1 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

export default RestaurantCard;