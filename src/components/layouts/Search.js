import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onSubmit = (e) => {
		this.props.searchImages(this.state.text);

		e.preventDefault();
	};

	render() {
		return (
			<div className='form'>
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						name='text'
						value={this.state.text}
						onChange={this.onChange}
					/>

					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				{this.props.showClear && (
					<button
						type='submit'
						onClick={this.props.clearImages}
						className='btn bg-light btn-block'>
						Clear Images
					</button>
				)}
			</div>
		);
	}
}

export default Search;
