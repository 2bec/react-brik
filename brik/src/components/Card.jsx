import React from 'react';


const styles = {
  button: {
    margin: 12,
  },
}

export default class ProductCard extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

        return (
			<Card>
				<CardHeader
					title={this.props.name}
					subtitle={this.props.meta}
					avatar={this.props.avatar}
				/>

				<CardMedia>
					<img src={this.props.image} alt="" />
				</CardMedia>

				<CardTitle title={this.props.name} subtitle={this.props.meta} />

				<CardText>
					{this.props.description}
				</CardText>

				<CardActions>
					<RaisedButton
						label="Comprar"
						labelPosition="before"
						primary={true}
						icon={<FontIcon className="muidocs-icon-cart" />}
						style={styles.button}
					/>
				</CardActions>
			</Card>
        );
    }
}
