import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">My Shoppy</span>
                <button type="button" className="btn btn-primary" onClick={this.props.onToggleCart}>Cart <span className="badge badge-light">{this.props.totalItem}</span></button>
                
            </nav>
            
        );
    }
}
 
export default NavBar;