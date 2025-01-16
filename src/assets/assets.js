import grab from './grab.png'
import Salads from './Salads.jpg'
import Roll from './Roll.jpg'
import Dessert from './Dessert.jpg'
import Sandwichs from './Sandwichs.jpg'
import Cakes from './Cakes.jpg'
import Vegs from './Vegs.jpg'
import Pastas from './Pastas.jpg'
import Noodle from './Noodle.jpg'
import salad from './greek_salads.jpg'
import vsalad from './veg_salad.jpg'
import italian from './italian_salad.jpg'
import chsalad from './chicken_salad.jpg'
// import proll from './Paneer_roll.jpg'
import ciroll from './chilli_chicken.jpg'
import eroll from './egg_roll.jpeg.jpg'
import vroll from './veg_rolls.jpg'
// import dchoc from './choclate_cake.jpg'
import dstraw from './Strawberry_IceCream.jpg'
import dcara from './caramel_icecream.jpg'
import dswril from './choclate_swirl.jpg' 
import schick from './chickpea_sandwich.jpg'
import schicken from './Chicken_Mayonnaise-Sandwich.jpg'
import sgreen from './Green_Goddess Sandwich.jpg'
import spaneer from './paneer_sandwich.jpg'
import dberry from './Berry_ripple icecream.jpg'
import djar from './jar_icecream.png'
import dfruit from './fruit-icecreaam.jpg'
import dvanilla from'./vanilla_icecream.jpg' 
import vchilli from './chilli_paneer.jpeg.jpg'
import vgobi from './gobi_manchurian.jpg'
import vmush from './Mushroom_Masala.jpg'
import vstew from './vegetable_stew.jpg'
import pchicken from './chicken_alfredo pasta.jpeg.jpg'
import pchick from './Chicken_Arrabbiata.jpeg.jpg'
import pchicke from './Chicken_Stroganoff.jpg'
import pwhite from './creamy_chicken pasta.jpg'
import nchicken from './chicken_noodles.jpg'
import nasian from './Asian_Noodle.jpg'
import nveg from './veg_hakka noodles.jpg'
import nbeef from './Beef_noodles.jpg'
import rating_star from './rating_star.png'
import playstore from './play_store.png'
import appstore from './app_store.png'
import bag from './bag.png'
import parcel from './parcel.png'



export const assets = {
    grab,
    rating_star,
    playstore,
    appstore,
    bag,
    parcel,
  
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: Salads
    },
    {
        menu_name: "Rolls",
        menu_image: Roll
    },
    {
        menu_name: "Dessert",
        menu_image: Dessert
    },
    {
        menu_name: "Sandwich",
        menu_image: Sandwichs
    },
    {
        menu_name: "Cake",
        menu_image: Cakes
    },
    {
        menu_name: "Veg",
        menu_image: Vegs
    },
    {
        menu_name: "Pasta",
        menu_image: Pastas
    },
    {
        menu_name: "Noodles",
        menu_image: Noodle
    }
]

export const food_list = [
    {
        _id:"1",
        name:"Greek Salad",
        image:salad,
        price:12,
        description:"Fresh, vibrant, and full of flavor – the perfect Greek salad for a light and healthy bite!",
        category:"Salad"

    },
    {
        _id:"2",
        name:"Veg Salad",
        image:vsalad,
        price:12,
        description:"Fresh, zesty, and bursting with Italian flavors – a salad that’s a feast for the senses!",
        category:"Salad"

    },
    {
        _id:"3",
        name:"Italian Salad",
        image:italian,
        price:12,
        description:"Fresh, zesty, and bursting with Italian flavors – a salad that’s a feast for the senses!",
        category:"Salad"

    },
    {
        _id:"4",
        name:"Chicken Salad",
        image:chsalad,
        price:12,
        description:"Fresh, zesty, and bursting with Italian flavors – a salad that’s a feast for the senses!",
        category:"Salad"

    },
    // {
    //     _id:"5",
    //     name:"Paneer-Kathi Roll",
    //     image:proll,
    //     price:12,
    //     description:"Deliciously wrapped and packed with flavor – rolls that are perfect for any craving!",
    //     category:"Rolls"

    // },
    {
        _id:"6",
        name:"Chicken Roll",
        image:ciroll,
        price:12,
        description:"Deliciously wrapped and packed with flavor – rolls that are perfect for any craving!",
        category:"Rolls"

    },
    {
        _id:"7",
        name:"Double-Egg Roll",
        image:eroll,
        price:12,
        description:"Deliciously wrapped and packed with flavor – rolls that are perfect for any craving!",
        category:"Rolls"

    },
    {
        _id:"8",
        name:"Veg Roll",
        image:vroll,
        price:12,
        description:"Deliciously wrapped and packed with flavor – rolls that are perfect for any craving!",
        category:"Rolls"

    },
    {
        _id:"9",
        name:"Berry icecream",
        image:dberry,
        price:12,
        description:"Whether in a cone, a cup, or on a sundae, it’s a classic indulgence that never goes out of style.",
        category:"Desserts"

    },
    {
        _id:"10",
        name:"Jar Icecream",
        image:djar,
        price:12,
        description:"Whether in a cone, a cup, or on a sundae, it’s a classic indulgence that never goes out of style.",
        category:"Desserts"

    },
    {
        _id:"11",
        name:"Fruit Icecream",
        image:dfruit,
        price:12,
        description:"Whether in a cone, a cup, or on a sundae, it’s a classic indulgence that never goes out of style.",
        category:"Desserts"

    },
    {
        _id:"12",
        name:"Vanilla Icecream",
        image:dvanilla,
        price:12,
        description:"Whether in a cone, a cup, or on a sundae, it’s a classic indulgence that never goes out of style.",
        category:"Desserts"

    },
    {
        _id:"13",
        name:"Chickpea-Salad Sandwich",
        image:schick,
        price:12,
        description:"A sandwich is a delicious combination of fillings between two slices of bread, offering endless flavor possibilities",
        category:"Sandwich"

    },
    {
        _id:"14",
        name:"Chicken-Mayyo Sandwich",
        image:schicken,
        price:12,
        description:"A sandwich is a delicious combination of fillings between two slices of bread, offering endless flavor possibilities",
        category:"Sandwich"

    },
    {
        _id:"15",
        name:"Green-Goddess Sandwich",
        image:sgreen,
        price:12,
        description:"A sandwich is a delicious combination of fillings between two slices of bread, offering endless flavor possibilities",
        category:"Sandwich"

    },
    {
        _id:"16",
        name:"Paneer Sandwich",
        image:spaneer,
        price:12,
        description:"A sandwich is a delicious combination of fillings between two slices of bread, offering endless flavor possibilities",
        category:"Sandwich"

    },
    // {
    //     _id:"17",
    //     name:"Choclate-Blackout Cake",
    //     image:dchoc,
    //     price:12,
    //     description:"Cake is a sweet, baked dessert made with layers of fluffy goodness, often topped with icing and decorations.",
    //     category:"Cakes"

    // },
    {
        _id:"18",
        name:"Strawberry-Crunch Cake",
        image:dstraw,
        price:12,
        description:"Cake is a sweet, baked dessert made with layers of fluffy goodness, often topped with icing and decorations.",
        category:"Cakes"

    },

    {
        _id:"19",
        name:"Caramel-Topped Cake",
        image:dcara,
        price:12,
        description:"Cake is a sweet, baked dessert made with layers of fluffy goodness, often topped with icing and decorations.",
        category:"Cakes"

    },

    {
        _id:"20",
        name:"Choclate-Swirl Cake",
        image:dswril,
        price:12,
        description:"Cake is a sweet, baked dessert made with layers of fluffy goodness, often topped with icing and decorations.",
        category:"Cakes"

    },
    {
        _id:"21",
        name:"Chilli-Paneer",
        image:vchilli,
        price:12,
        description:"Paneer is a fresh, soft Indian cheese made from milk, commonly used in savory dishes for its mild flavor and rich texture",
        category:"Veg"

    },
   {
        _id:"22",
        name:"Gobi Manchurian",
        image:vgobi,
        price:12,
        description:"Paneer is a fresh, soft Indian cheese made from milk, commonly used in savory dishes for its mild flavor and rich texture",
        category:"Veg"

    },
   {
        _id:"23",
        name:"Mushroom Masala",
        image:vmush,
        price:12,
        description:"Paneer is a fresh, soft Indian cheese made from milk, commonly used in savory dishes for its mild flavor and rich texture",
        category:"Veg"

    },
    {
        _id:"24",
        name:"Vegetable Stew",
        image:vstew,
        price:12,
        description:"Paneer is a fresh, soft Indian cheese made from milk, commonly used in savory dishes for its mild flavor and rich texture",
        category:"Veg"

    },
    {
        _id:"25",
        name:"Chicken Alfredo Pasta",
        image:pchicken,
        price:12,
        description:"Pasta is a versatile Italian dish made from durum wheat, typically served with a variety of sauces and toppings",
        category:"Pasta"

    },
    {
        _id:"26",
        name:"Chicken-Arrabbiata Pasta",
        image:pchick,
        price:12,
        description:"Pasta is a versatile Italian dish made from durum wheat, typically served with a variety of sauces and toppings",
        category:"Pasta"

    },
    {
        _id:"27",
        name:"Chicken-Stroganoff Pasta",
        image:pchicke,
        price:12,
        description:"Pasta is a versatile Italian dish made from durum wheat, typically served with a variety of sauces and toppings",
        category:"Pasta"

    },
    {
        _id:"28",
        name:"Creamy Chicken Pasta",
        image:pwhite,
        price:12,
        description:"Pasta is a versatile Italian dish made from durum wheat, typically served with a variety of sauces and toppings",
        category:"Pasta"

    },
    {
        _id:"29",
        name:"Chicken Noodles",
        image:nchicken,
        price:12,
        description:"Noodles are thin, long strands of dough, typically boiled and served in soups, stir-fries, or with sauces",
        category:"Noodles"

    },
    {
        _id:"30",
        name:"Asian Noodles",
        image:nasian,
        price:12,
        description:"Noodles are thin, long strands of dough, typically boiled and served in soups, stir-fries, or with sauces",
        category:"Noodles"

    },
    {
        _id:"31",
        name:"Veg Noodles",
        image:nveg,
        price:12,
        description:"Noodles are thin, long strands of dough, typically boiled and served in soups, stir-fries, or with sauces",
        category:"Noodles"

    },
    {
        _id:"32",
        name:"Beef Noodles",
        image:nbeef,
        price:12,
        description:"Noodles are thin, long strands of dough, typically boiled and served in soups, stir-fries, or with sauces",
        category:"Noodles"

    },
]