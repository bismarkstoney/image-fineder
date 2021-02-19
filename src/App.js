import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layouts/Navbar';
import unsplash from './api/unsplash';
import Images from './components/images/Images';
import Search from './components/layouts/Search';

export class App extends Component {
	state = {
		images: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await unsplash.get('/search/photos?query=cars&limit=20');
		this.setState({ loading: false });
		this.setState({ images: res.data.results });
	}
	searchImages = async (text) => {
		this.setState({ loading: true });
		const res = await unsplash.get(`/search/photos?query=${text}`);
		this.setState({ loading: false });
		this.setState({ images: res.data.results });
		console.log(text);
	};

	clearImages = () => {
		this.setState({ loading: false });
		this.setState({ images: [] });
	};
	render() {
		const { loading, images } = this.state;
		return (
			<div>
				<Navbar />
				<div className='container'>
					<Search
						searchImages={this.searchImages}
						clearImages={this.clearImages}
						showClear={this.state.images.length > 0 ? true : false}
					/>
					<Images loading={loading} images={images} />
				</div>
			</div>
		);
	}
}

export default App;
