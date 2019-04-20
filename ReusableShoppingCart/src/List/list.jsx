import React, { Component } from 'react';

class List extends Component {
    render() { 
        return (
            <div className="container">
            {
                this.props.list.map(item => 
                    <div key={item.id} className="card m-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-tag" aria-hidden="true"></i> {item.price} INR / {item.unit}</h6>
                                </div>
                                <div className="col-md-2 text-right float-right">
                                    <span className={"badge badge-" + (item.inStock ? "success" : "danger") + " m-2"}>{item.inStock ? 'In Stock' : 'Out of Stock'}</span>
                                    <button type="button" className="btn btn-primary btn-sm" disabled={!item.inStock} onClick={() => this.props.onAddToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                )
            }
            </div>
         );
    }
}
 
export default List;