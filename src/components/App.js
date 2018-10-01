import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <ProductList />
                    </div>
                    <div className="col-md-6">
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
