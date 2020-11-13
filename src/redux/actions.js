 import { 

 	REQUEST_PEOPLE_PENDING,
 	REQUEST_PEOPLE_SUCCESS,
 	REQUEST_PEOPLE_FAILED,
 	CHARACTER_COUNTER_CLICKED

  } from '../constants/constants';

  export const characterCounterClicked = () => {

	  return ({ type: CHARACTER_COUNTER_CLICKED });
  }  
   

 export const requestPeople = (dispatch) => {

  console.log("ACTION ", process.env.BEARER_TOKEN);
 
    dispatch({ type: REQUEST_PEOPLE_PENDING });

    fetch(process.env.API_URL, {

       headers: {
    	  'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
  		}

    }).then(response => {
    	return response.json();
    }).then(data => {
       	dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: data.data })
    }).catch(error => dispatch({ type: REQUEST_PEOPLE_FAILED, payload: error }))
 }