import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'

export default class MenuTop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			activeItem: 'produtos'
		};
	}

	componentDidMount() {
		this.setState({activeItem: 'produtos'});
	}

	handleItemClick(e, object){
		console.log('Você clicou em: ', object.name);

		this.setState({
			activeItem: object.name
		})
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu size='huge'>
				<Menu.Item name='produtos' active={activeItem === 'produtos'} onClick={this.handleItemClick.bind(this)} />
				<Menu.Item name='vender' active={activeItem === 'vender'} onClick={this.handleItemClick.bind(this)} />

				<Menu.Menu position='right'>

					<Menu.Item>
						<Button animated='vertical'>
							<Button.Content hidden>Shop</Button.Content>
							<Button.Content visible>
								Carrinho <Icon name='shop' />
							</Button.Content>
						</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}