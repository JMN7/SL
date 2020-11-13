import { 

 	REQUEST_PEOPLE_PENDING,
 	REQUEST_PEOPLE_SUCCESS,
 	REQUEST_PEOPLE_FAILED,
     CHARACTER_COUNTER_CLICKED

  } from '../constants/constants';


const initialState = {

	isPending: false,
	people: [],
	error: '',
     characterCounter: false
}

export const requestPeople = (state=initialState, action={}) =>{

     switch(action.type){

     	case REQUEST_PEOPLE_PENDING:
     	    return Object.assign({}, state, { isPending: true});
     	case REQUEST_PEOPLE_SUCCESS:
     	    return Object.assign({}, state, { people: action.payload, isPending: false});
     	case REQUEST_PEOPLE_FAILED:
     	    return Object.assign({}, state, { error: action.payload, isPending: false});
          case CHARACTER_COUNTER_CLICKED:
               return Object.assign({}, state, { characterCounter: !state.characterCounter});
     	default:
     	    return state;

     }
}