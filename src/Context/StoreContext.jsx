import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});
    // const url = "http://localhost:4000"
    const url = "https://mernbackend-hh2q.onrender.com/"
    
    const [token,setToken] = useState(() => localStorage.getItem("token") || "")
    const [food_list,setFoodList] = useState([])

     // Synchronize token with sessionStorage
     useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const addToCart = async (itemId) => {
        try{
            if(!cartItems[itemId]) {
                setCartItems((prev)=>({...prev,[itemId]:1}))
              }
              else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
              }
            if (token) {
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            }
        }
        catch (error) {
            console.error("Error adding to cart:", error);
        }
    }

    const removeFromCart = async (itemId) =>{
        try{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
            if (token) {
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            }
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id === item);
            if(itemInfo){
                totalAmount += itemInfo.price*cartItems[item];
            }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try{
            const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
        }
        catch (error) {
            console.error("Error fetching food list:", error);
        }
    }

    const loadCartData = async (token) => {
        try{
            const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData || {});
        }catch (error) {
            console.error("Error loading cart data:", error);
            setCartItems({}); // Fallback to an empty cart
        }
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;









