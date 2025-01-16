import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets.js'
import { StoreContext } from '../../Context/StoreContext'


const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
     <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
              ?<button className='add' onClick={()=>addToCart(id)}>+</button>
              :<div className='food-item-counter'>
                <button className='minus' onClick={()=>removeFromCart(id)}>-</button>
                <p>{cartItems[id]}</p>
                <button className='addi' onClick={()=>addToCart(id)}>+</button>
              </div>
        }
     </div>
     <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_star} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
     </div>
    </div>
  )
}

export default FoodItem
