import {useEffect} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9135016&lng=78.0781901&collection=83667"
        );
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    return resInfo===null?(
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;