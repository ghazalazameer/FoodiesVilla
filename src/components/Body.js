import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    //Local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant]=useState([]);

    const[searchText,setSearchText]=useState("");
    //useEffect hook to fetch data from API
    useEffect(() => {
        fetchData();
    }, []);

//Function to fetch data from API
const fetchData = async () => {
    const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
);
const json =await data.json();
console.log(json);
// Optional Chaining
            setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElement?.infoWithStyle?.restaurant);
            setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElement?.infoWithStyle?.restaurant);
    };
    console.log(listOfRestaurants);
// Conditional rendering
return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
//filter the restraunt card and update it
const filteredRestaurant = listOfRestaurants.filters((res)=>res.data.name.toLowerCase().include(searchText.toLowerCase()));
setListOfRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.data.avgRating>4
                    );
                    setListOfRestaurants(filteredRestaurant);
                }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
            console.log(filteredRestaurant); 
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
                </div>
        </div>
    ); 
};

export default Body;
