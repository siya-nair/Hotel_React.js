import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {

		return (
			<div className='pa2'>
			<input 
			className='pa3 ba b--white bg-lightest-yellow'
			type='search' 
			placeholder='Add your Favorite Hotel' 
			onChange={searchChange}
			/>
			</div>
			);





		}
		

 export default SearchBox;
