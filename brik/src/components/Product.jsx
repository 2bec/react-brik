import React from 'react';

import { Card, Image, Button } from 'semantic-ui-react';


const src = 'assets/images/default/white-image.png'

export default class Product extends React.Component {
	componentDidMount() {
	}

	addToCart(e, name){
		console.log('addToCart: ', e, name);
	}

	render() {
		const { id, name, price, description, condition} = this.props
		return (
			<Card key={id} raised>
				<Image src={src} />
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Meta>{condition}</Card.Meta>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button
						color='green'
						content='Comprar'
						icon='shop'
						onClick={this.addToCart}
						label={{ id:`${id}`, basic: true, color: 'grey', pointing: 'left', content: `R$ ${price}` }}
					/>
				</Card.Content>
			</Card>
		);
	}

}

export class ProductPreview extends React.Component {
	render() {
		return null;
	}
}
