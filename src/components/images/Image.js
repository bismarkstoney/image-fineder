import React from 'react';

function Image(props) {
	return (
		<div className='card '>
			<img
				src={props.image.urls.regular}
				alt=''
				style={{ width: '300px', height: '300px' }}
			/>

			<div>
				<a href='' className='btn btn-dark btn-sm my-1 text-center'>
					View
				</a>
			</div>
		</div>
	);
}

export default Image;
