import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layouts/Navbar';
import unsplash from './api/unsplash';
import Images from './components/images/Images';

export class App extends Component {
	state = {
		images: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await unsplash.get('/search/photos?query=cars&limit=10');
		this.setState({ loading: false });
		this.setState({ images: res.data.results });
	}
	render() {
		const { loading, images } = this.state;
		return (
			<div>
				<Navbar />
				<div className='container'>
					<Images loading={loading} images={images} />
				</div>
			</div>
		);
	}
}

export default App;
