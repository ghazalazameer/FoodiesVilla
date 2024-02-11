import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const Body = () => {
    //Local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchtext, setsearchtext] = useState("");
    // console.log("Body rendered"); //for debugging purpose re render the component
    //whenever state variable update, react triggers a reconciliation cycle (re-render the component)
    //useEffect hook to fetch data from API
    useEffect(() => {
        fetchData();
    }, []);

    //Function to fetch data from API
    const fetchData = async () => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9135016&lng=78.0781901&collection=83667");
            const json =await data.json();
            console.log("apiData", json?.data.cards[3]);
            //below written code is not a good way to write code , please use optional chaining
            //setList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        
            //Optional chaining: 
            console.log("text", json?.data?.cards);
            for (let i = 0; i < json?.data?.cards.length; i++) {
                const element = json?.data?.cards[i];
                if (element.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    setListOfRestaurants(element.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    setFilteredRestaurant(element.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    break;
                }
            }
            //optional chaining
            // setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
//conditional rendering
const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return (
    <h1>Looks like you're offline!! Please check your internet Connection</h1>
);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="">
            <div className="filter flex">
                <div className="search m-4 p-4 relative text-gray-600">
                <input type ="text" className="border border-solid border-black" value={searchtext}
                onChange={(e)=>{
                    setsearchtext(e.target.value);
                }}
                 />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" 
                onClick={()=>
                {
                  const filteredRestaurant=  listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                    //filtering the list of restaurants based on search input
                }}>Search</button>
             
                   </div>
                <div className="search m-4 p-4">
                <button className="px-4 py-1 bg-gray-100 m-4 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4 );
                    setFilteredRestaurant(filteredList);
                }}       
                >Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
           

                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                </div>
        </div>
    ); 
};
export default Body;