// pizza
import Apricot from "../../src/assets/images/pizza/Apricot-Chicken.png";
import Apricot2 from "../../src/assets/images/pizza/Apricot-Chicken2.png";
import Chicken from "../../src/assets/images/pizza/Chicken-Hawaii.png";
import Chicken2 from "../../src/assets/images/pizza/Chicken-Hawaii2.png";
import italiano from "../../src/assets/images/pizza/Grand-Italiano.png";
import italiano2 from "../../src/assets/images/pizza/Grand-Italiano2.png";


// drinks
import Bottle from "../../src/assets/images/drinks/Water-Bottle.png";
import Bottle2 from "../../src/assets/images/drinks/Water-Bottle2.png";
import trio from "../../src/assets/images/drinks/Trio-Cafe.png";
import trio2 from "../../src/assets/images/drinks/Trio-Cafe2.png";
import tropicana from "../../src/assets/images/drinks/Tropicana-Juice.png";
import tropicana2 from "../../src/assets/images/drinks/Tropicana-Juice2.png";

// desserts
import Coffee from "../../src/assets/images/desserts/Black-Coffee.png";
import Coffee2 from "../../src/assets/images/desserts/Black-Coffee2.png";
import Blueberry from "../../src/assets/images/desserts/Blueberry.png";
import Blueberry2 from "../../src/assets/images/desserts/Blueberry2.png";

// burger 
import Butter from "../../src/assets/images/burger/Cheese-Butter.png";
import Butter2 from "../../src/assets/images/burger/Cheese-Butter2.png";
import ChickenBurger from "../../src/assets/images/burger/Chicken-Burger.png";
import ChickenBurger2 from "../../src/assets/images/burger/Chicken-Burger2.png";
import Double from "../../src/assets/images/burger/Double-Beef.png";
import Double2 from "../../src/assets/images/burger/Double-Beef2.png";


import srcImg from "../../src/assets/images/img1.png";
import srcImg2 from "../../src/assets/images/big.png";

/*===========================================*/
/*===========================================*/
/*===========================================*/

export const foodItems = [
    {
        id: 1,
        itemImg: Apricot,
        itemBigImg: Apricot2,
        itemName: "apricot chicken",
        itemDesc: "Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano.",
        itemPrice: "18.30",
        itemCat: "pizza",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 2,
        itemImg: srcImg,
        itemBigImg: srcImg2,
        itemName: "salad 1",
        itemDesc: "salad 1 desc",
        itemPrice: "14.2",
        itemCat: "salad",
        sale: true,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 3,
        itemImg: Chicken,
        itemBigImg: Chicken2,
        itemName: "Chicken Hawaii",
        itemDesc: "Extra-virgin olive oil, mozzarella cheese, thinly-sliced steak meat, garlic, green peppers, mushrooms and tomatoes",
        itemPrice: "14.49",
        itemCat: "pizza",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 4,
        itemImg: Butter,
        itemBigImg: Butter2,
        itemName: "Cheese Butter",
        itemDesc: "A mighty meaty double helping of all the reasons you love our burger.",
        itemPrice: "15.76",
        itemCat: "burger",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 5,
        itemImg: tropicana,
        itemBigImg: tropicana2,
        itemName: "Tropicana Juice",
        itemDesc: "View great tasting Tropicana Orange Juice and Juice Drink Products. Featuring Tropicana Orange Juice",
        itemPrice: "10.11",
        itemCat: "drinks",
        sale: true,
        itemNewprice: "8.2",
        itemQty: 1
    },
    {
        id: 6,
        itemImg: Coffee,
        itemBigImg: Coffee2,
        itemName: "Black Coffee",
        itemDesc: "Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts",
        itemPrice: "11.76",
        itemCat: "desserts",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 7,
        itemImg: srcImg,
        itemBigImg: srcImg2,
        itemName: "salad 2",
        itemDesc: "salad 2 desc",
        itemPrice: "5.22",
        itemCat: "salad",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 8,
        itemImg: Bottle,
        itemBigImg: Bottle2,
        itemName: "Water Bottle",
        itemDesc: "Investing in a reusable water bottle that you can refill throughout the day. Carrying one around with you will make you more likely to drink up.",
        itemPrice: "10.18",
        itemCat: "drinks",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 9,
        itemImg: Blueberry,
        itemBigImg: Blueberry2,
        itemName: "Blueberry Shake",
        itemDesc: "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division",
        itemPrice: "10.68",
        itemCat: "desserts",
        sale: true,
        itemNewprice: "7.5",
        itemQty: 1
    },
    {
        id: 10,
        itemImg: ChickenBurger,
        itemBigImg: ChickenBurger2,
        itemName: "Chicken Burger",
        itemDesc: "A mighty meaty double helping of all the reasons you love our burger.",
        itemPrice: "16.75",
        itemCat: "burger",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 11,
        itemImg: trio,
        itemBigImg: trio2,
        itemName: "trio Cafe",
        itemDesc: "Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center.",
        itemPrice: "12.18",
        itemCat: "drinks",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 12,
        itemImg: srcImg,
        itemBigImg: srcImg2,
        itemName: "salad 3",
        itemDesc: "salad 3 desc",
        itemPrice: "7.7",
        itemCat: "salad",
        sale: true,
        itemNewprice: "4.2",
        itemQty: 1
    },
    {
        id: 13,
        itemImg: Double,
        itemBigImg: Double2,
        itemName: "Double Beef Burger",
        itemDesc: "A mighty meaty double helping of all the reasons you love our burger.",
        itemPrice: "13.17",
        itemCat: "burger",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
    {
        id: 14,
        itemImg: italiano,
        itemBigImg: italiano2,
        itemName: "Grand Italiano",
        itemDesc: "Quisque pretium turpis non tempus cursus. Nulla consequat, mi nec pellentesque imperdiet, mi quam congue magna, tristique commodo.",
        itemPrice: "7.00",
        itemCat: "pizza",
        sale: false,
        itemNewprice: "13.2",
        itemQty: 1
    },
];