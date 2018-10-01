import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import store from './../store';
import { removeProduct } from './../actionCreators';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            cart: []
        };
        store.subscribe(() => {
            this.setState({
                cart: store.getState().cart
            });
        });
    }
    removeCart = (prod) => {
        store.dispatch(removeProduct(prod));
    }
    render() {
        return (
            <div>
                <h3>Carrito</h3>

                <ListGroup>
                    {this.state.cart.map(prod => {
                        return (
                            <ListGroupItem key={prod.id}>
                                <Button color="danger" onClick={() => this.removeCart(prod)}>X</Button>
                                {prod.name}
                            </ListGroupItem>

                        );
                    })}
                    <ListGroupItem>
                        Total: ${this.state.cart.reduce((sum, prod) => sum + prod.price, 0)}
                    </ListGroupItem>
                </ListGroup>


            </div >
        )
    }
}

export default ShoppingCart;