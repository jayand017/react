import React, { Component } from 'react';

class Cart extends Component {

    getTotalAmount = () => {
        const cart = this.props.cart;
        let totalAmount = 0;
        for(let i=0; i< cart.length; i++) {
            totalAmount = totalAmount + cart[i].amount;
        }
        return totalAmount;
    }

    render() {
        

        return (
            <div className="card cart-outer">
                <div className="card-body">
                {
                    this.props.cart.map(item => 
                        <h6 key={item.id} className="card-subtitle p-2 m-1 text-muted bg-light">{item.name} ({item.quantity})
                            <span className="float-right">{item.amount} <i className="fa fa-times text-danger" onClick={() => this.props.onDeleteItem(item)} aria-hidden="true"></i></span>
                        </h6>
                    )
                }
                {
                    <h6 className="card-subtitle p-2 m-1 bg-primary text-white">Total
                        <span className="float-right">INR {this.getTotalAmount()}</span>
                    </h6>
                }
                </div>
            </div>
            
          
         );
    }
}
 
export default Cart;