import React, { Component } from 'react';
import NavBar from './navBar/navBar';
import List from './List/list';
import Cart from './Cart/cart';

class App extends Component {
    state = { 
        list: [
            {id: 0, name: 'Green Apple', price: 59, unit: 'Kg', inStock: true},
            {id: 1, name: 'Black Gram', price: 80, unit: 'Kg', inStock: true},
            {id: 2, name: 'Wheat Flour', price: 23, unit: 'Kg', inStock: false},
            {id: 3, name: 'Banana', price: 24, unit: 'Dozens', inStock: true}
        ],
        cart : [],
        toggleCart : false 
    }

    handleAddToCart = (item) => {
        const newCart = [...this.state.cart];
        const indexOfItemInCart = newCart.findIndex(element => element.id === item.id);
        if(indexOfItemInCart > -1){
            const newQuantity = newCart[indexOfItemInCart].quantity + 1;
            const newAmount = newCart[indexOfItemInCart].amount + (newCart[indexOfItemInCart].amount/newCart[indexOfItemInCart].quantity);
            newCart[indexOfItemInCart].quantity = newQuantity;
            newCart[indexOfItemInCart].amount = newAmount;
            this.setState({cart: newCart})
        }
        else {
            const newItemInCart = {
                id: item.id, name: item.name, quantity: 1, amount: item.price
            }
            newCart.push(newItemInCart);
            this.setState({cart: newCart});
        }
    }

    handleDelete = (item) => {
        const newCart = this.state.cart.filter(element => element.id !== item.id)
        this.setState({cart: newCart});
    }

    handleToggleCart = () => {
        this.setState({toggleCart: !this.state.toggleCart})
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar totalItem={this.state.cart.length} onToggleCart={this.handleToggleCart}/>
                {this.state.toggleCart ? <Cart cart={this.state.cart} onDeleteItem={this.handleDelete} /> : null}
                <List list={this.state.list} onAddToCart={this.handleAddToCart}/>
            </React.Fragment>
        );
    }
}
 
export default App;