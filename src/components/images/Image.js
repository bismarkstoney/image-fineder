import React from 'react';

function Image(props) {
	return (
		<div className='card '>
			<img
				src={props.image.urls.regular}
				alt=''
				style={{ width: '300px', height: '300px' }}
			/>
		</div>
	);
}

export default Image;
