import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { removeProduct } from './../actionCreators';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <h3>Carrito</h3>

                <ListGroup>
                    {this.props.cart.map(prod => {
                        return (
                            <ListGroupItem key={prod.id}>
                                <Button color="danger" onClick={() => this.props.removeCart(prod)}>X</Button>
                                {prod.name}
                            </ListGroupItem>

                        );
                    })}
                    <ListGroupItem>
                        Total: ${this.props.cart.reduce((sum, prod) => sum + prod.price, 0)}
                    </ListGroupItem>
                </ListGroup>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}
const mapDispatchToProps = dispatch => {
    return {
        removeCart(prod) {
            dispatch(removeProduct(prod));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);