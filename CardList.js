import React from 'react';
import Card from './Card';

const CardList =({hotels})=>
{
	//give a loop and when u give a loop give a unique key too
const cardComponent=hotels.map((user,i)=>{
	
return <Card key={i} id={hotels[i].id} name={hotels[i].name} city={hotels[i].city}/>

})
return(
<div>
	{cardComponent}
</div>
	
	);

}

export default CardList;

