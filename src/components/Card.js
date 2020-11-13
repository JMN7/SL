import React from 'react';

const Card = (props) => {

let counterArray = "";

	if(props.counter){

		 counterArray = props.counter.map((item, i) => {
    		
    		return <div className="character">
    			
    			<div className="row">

    				<div className="col-4 character-left">
    					<p>Character</p>
    				</div>
    				<div className="col-4 counter">
    					<p>Counter</p>
    				</div>
    			</div>

    			<div className="row">
    				<div className="col-4 character-left">
    					{item[0]}
    				</div>
    				<div className="col-4 counter">
    					{item[1]}
    				</div>
    			</div>

    		</div>
   		 });
	}
  
	return (

	<div className="container carddiv rounded-lg">

	  <div className="row">

		  <div className="col-7">

			  <div className="row rounded-lg person-info">

				    <div className="col-6 right-name">
				      <h2>Job Title: </h2>
				    </div>
				    <div className="col-5 left-name">
				    	<h3>{props.job}</h3>
				    </div>

			  </div>

			  <div className="row rounded-lg">

				    <div className="col-6 right-name">
				      <h2>Name: </h2>
				    </div>
				    <div className="col-5 left-name">
				   		 <h3>{props.name}</h3>
				    </div>
			    
			  </div>

			   <div className="row rounded-lg">

				    <div className="col-6 right-name">
				      <h2>Email:  </h2>
				    </div>
				    <div className="col-5 left-name">
				     <h3>{props.email}</h3>
				    </div>
				
			 	 </div>

		 	 </div>

			<div className="col-4">
		 	  	<div className="counter-table">
			      {counterArray}
			    </div>
		 	 </div>

	 	 </div>

	</div>

	);
}

export default Card;