import React from 'react';
import Spinner from '../layouts/Spinner';
import Image from './Image';

const Images = ({ images, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{images.map((image) => (
					<Image image={image} key={image.id} />
				))}
			</div>
		);
	}
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1em',
};
export default Images;
