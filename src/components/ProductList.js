import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { addProduct } from './../actionCreators';
import { connect } from 'react-redux';

class ProductList extends Component {
    products = [
        { id: 1, name: "Remera", price: 95, img: "https://static.netshoes.com.ar/produtos/remera-mood-basic/98/383-0261-698/383-0261-698_detalhe1.jpg?resize=326:*" },
        { id: 2, name: "Chomba", price: 40, img: "https://http2.mlstatic.com/lacoste-chomba-azul-hombre-classic-fit-l1212-azul-francia-D_NQ_NP_866298-MLA25698226689_062017-F.jpg" },
        { id: 3, name: "Buzo", price: 150, img: "http://d26lpennugtm8s.cloudfront.net/stores/669/214/products/150537306628833549481-0d7f05d2dbf35494c915157932148047-640-0.jpg" }
    ]

    render() {
        return (
            <div>

                <h2>Listado</h2>
                {this.products.map((prod, i) => {
                    return (
                        <Card key={prod.id}>
                            <CardImg top width="50" height="150" src={prod.img} alt={prod.name} />
                            <CardBody>
                                <CardTitle>{prod.name}</CardTitle>
                                <Button onClick={() => this.props.addCart(prod)}>${prod.price}</Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
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
        addCart(prod) {
            dispatch(addProduct(prod));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);