import React, {useState} from 'react';

function MenuSystem(){

    const [orders, setOrders] = useState([]);
    const [newOrders, setNewOrders] = useState("");

    document.title = "Menu System";

    //this allow you to type a text in the input element
    function handleInputOrderChange(event){
        setNewOrders(event.target.value);
    }
    //Checks if the inputted order is in the menu
    function isValidOrder(order) {
        const validOrders = [
            "Burger Steak",
            "Chocolate Sundae",
            "Coke",
            "ChickenJoy",
            "Cookies & Cream Sundae",
            "Coke Float",
            "Fries",
            "Mini Chocolate Sundae",
            "Iced Latte",
            "Jolly Spaghetti",
            "Peach Mango Pie",
            "Iced Tea",
            "Yumburger",
            "Tuna Pie",
            "Pineapple Juice"
        ];
        return validOrders.includes(order.trim());
    }

    function calculateTotal() {
        const priceList = {
            "Burger Steak": 60,
            "Chocolate Sundae": 52,
            "Coke": 61,
            "ChickenJoy": 82,
            "Cookies & Cream Sundae": 59,
            "Coke Float": 59,
            "Fries": 47,
            "Mini Chocolate Sundae": 27,
            "Iced Latte": 59,
            "Jolly Spaghetti": 69,
            "Peach Mango Pie": 43,
            "Iced Tea": 66,
            "Yumburger": 40,
            "Tuna Pie": 53,
            "Pineapple Juice": 66
        };
    
        return orders.reduce((total, order) => total + (priceList[order] || 0), 0);
    }    
    
    //the if statement prevent from adding blank orders
    function addOrder() {
        if (newOrders.trim() !== "" && isValidOrder(newOrders)) {
            setOrders(o => [...o, newOrders]);
            setNewOrders("");
        } else if (newOrders.trim() !== "") {
            alert("Invalid order. Please select an item from the menu.");
        }
    }    

    function deleteOrder(index){

        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
    }

    function handleFinishOrder(){
        setOrders([]);
    }

    return(
    <div className = "menu-system">

        <h1>Welcome to Jollibee!</h1>

        <table>
            <thead>
                <th>Main Courses</th>
                <th>Price</th>
                <th>Desserts</th>
                <th>Price</th>
                <th>Drinks</th>
                <th>Price</th>
            </thead>
            <tbody>
                <tr>
                    <td>Burger Steak</td>
                    <td>₱60.00</td>
                    <td>Chocolate Sundae</td>
                    <td>₱52.00</td>
                    <td>Coke</td>
                    <td>₱61.00</td> 
                </tr>
                <tr>
                    <td>ChickenJoy</td>
                    <td>₱82.00</td>
                    <td>Cookies & Cream Sundae</td>
                    <td>₱59.00</td>
                    <td>Coke Float</td>
                    <td>₱59.00</td>
                </tr>
                <tr>
                    <td>Fries</td>
                    <td>₱47.00</td>
                    <td>Mini Chocolate Sundae</td>
                    <td>₱27.00</td>
                    <td>Iced Latte</td>
                    <td>₱59.00</td> 
                </tr>
                <tr>
                    <td>Jolly Spaghetti</td>
                    <td>₱69.00</td> 
                    <td>Peach Mango Pie</td>
                    <td>₱43.00</td> 
                    <td>Iced Tea</td>
                    <td>₱66.00</td> 
                </tr>
                <tr>
                    <td>Yumburger</td>
                    <td>₱40.00</td> 
                    <td>Tuna Pie</td>
                    <td>₱53.00</td> 
                    <td>Pineapple Juice</td>
                    <td>₱66.00</td> 
                </tr>
            </tbody>
        </table>

        <div>
            <br></br>
            <input 
                type = "text" 
                placeholder = "Enter your order" 
                value = {newOrders} 
                onChange = {handleInputOrderChange}>
            </input>
            <button 
                className = "add-order-button"
                onClick = {addOrder}>
                Add Order
            </button>

            <h2>Your Orders: </h2>
        </div>

        <ol>
            {orders.map((order, index) =>
            <li key = {index}>
                <span className = "text">{order}</span>
                <button 
                    className = "delete-order-button"
                    onClick = {() => deleteOrder(index)}>
                    Delete Order
                </button>
            </li>
             )}
        </ol>

        <h2>Total Amount: ₱{calculateTotal()}.00</h2>


        <button
            className = "confirm-button"
            onClick = {handleFinishOrder}>
            Confirm Order
        </button>
    </div>)
}

export default MenuSystem