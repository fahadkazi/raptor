import React from 'react'

export default React.createClass({
	render() {
		return <div>
				<Favorites/>
				</div>
	}
})

export class Favorites extends React.Component {

	render() {
		// console.log('state props', this.props.config);
		return (
			<h1>jfdklsf</h1>
		);
	}
}