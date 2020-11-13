import React from 'react';
import Card from './Card';
import { counterF } from '../utils/util'

const CardList = ({ people, characterCounterClicked, toggle }) => {

	const counterArray = [];
	let cardsArray = "";
	
	if(toggle){

		people.forEach((person) => { 

			counterArray.push(counterF(person.email_address));

		});

		cardsArray = people.map((user, i) => {
        
		return <Card 
				key={i} 
				name={people[i].display_name} 
				job={people[i].title} 
				email={people[i].email_address}
				counter={counterArray[i]}
				/>
		});

	}else {

		cardsArray = people.map((user, i) => {
        
		return <Card 
				key={i} 
				name={people[i].display_name} 
				job={people[i].title} 
				email={people[i].email_address}
				/>
		});
	}

	return (
			<div className="container">

				<div className="row">
					<div className="col-3 title">
						<h2>SalesLoft People</h2>
					</div>
					<div className="col-5 left-name center">
			        		<button 
			        		className='btn btn-outline-dark center'
			                onClick={characterCounterClicked}
			                >
			        		Character Counter
			        		</button>
					</div>
				</div>

				<div className="row">
					  {cardsArray}
				</div>

			</div>
		);
}
export default CardList;