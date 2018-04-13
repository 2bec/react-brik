import React from 'react';

import { Card } from 'semantic-ui-react';

import Product from './Product';
// import products from '../fixtures/products.json'


export default class ProductList extends React.Component {

    render() {
        const { products } = this.props

        return (
                <Card.Group stackable>
                {
                    products.map(function (product) {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                stock={product.stock}
                                price={product.price}
                                category={product.meta}
                                description={product.description}
                                condition={product.condition}
                            />)
                    },this)
                }
                </Card.Group>
        );
    }

}
