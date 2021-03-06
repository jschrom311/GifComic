var giphy = require('giphy-api')('rNq8FtmogPXR2ZuiSwncKoSAcTbDVQii');
import {API_BASE_URL} from '../config';
import { browserHistory } from 'react-router';

const initialState = {
  giphs: [],
  giph: '',
  editing: true,
  textBox: 'enter text for giph',
  cards: [],
  id: 0,
  editingCard: null,
  slider: 200,
  textSelect: 'text top-left',
  selectedCard: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'GIPH':
      return {
        ...state,
        giphs: action.payload
      };

    case 'SELECT':
      return {
        ...state,
        giph: action.payload,
        id: action.id
      };

    case 'SAVE':
    console.log(action, state)
    let newCards = state.cards;

    if(newCards[action.id])
    {
      newCards[action.id] = {giph:state.giph, id:state.id, textBox:state.textBox, slider:state.slider,
        textSelect: state.textSelect}
    }
    else
    {
      newCards.push({giph:state.giph, id:state.id, textBox:state.textBox, slider:state.slider,
      textSelect: state.textSelect})
    }
        return {
          ...state,
          editing: true,
          cards: newCards
          // cards: [...state.cards, {giph:state.giph, id:state.id, text:state.text}]
        };

    case 'EDIT':

        return {
          ...state,
          editing: true
        };

    case 'SAVECARDS':
        console.log(action, state)
        //window.location.reload();  //TEMP FIXME 
        action.entry.history.push('/dashboard')
        return {
          ...state,
    }

    case 'SELECT_CARD':
    console.log(action, state, this);
        return{
          ...state,
          editingCard: action.id === state.editingCard ? null : action.id,
          selectedCard: true
        };

    case 'HANDLE_CHANGE':
    delete action.type;

    let thing = Object.assign(state,action);
    console.log(thing);
        return {...thing};

        case 'REMOVE_CARD':
        console.log(action, state);
        let cards = [...state.cards];
        cards.splice(action.id, 1)
          return {
            ...state,
            cards: cards
          }

    default:
      return state;
  }

};

/*export const savecards = (cards) => {
  console.log(this,cards)
  return dispatch => {
    dispatch();
  }
}*/

export const savecards = (entry) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(authToken);
  console.log(entry);
  return fetch(`${API_BASE_URL}/add`, {
      method: 'POST',
      body: JSON.stringify(entry),
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
  })
  .then((response) => {
      console.log(response);
      dispatch({ type: 'SAVECARDS', entry : entry}) 
//         // socket.emit('add entry', entries);

    })
}

export const searchGiphs = entry => {
  return dispatch => {
    console.log(entry);
    giphy.search({q: entry, limit: 6}).then(function(res) {
      // Res contains gif data!
  //    console.log(res);
      dispatch({ type: 'GIPH', payload: res.data });
    });
  };
};


/*
  export const selectGiph = (giph, i) =>
{
  return dispatch =>
  {
    console.log(giph, i);
    dispatch({type: "SELECT", payload: giph.embed_url, id: i});
  }
}
  
  export const save = (id, textBox, slider, textSelect) =>
{
  console.log("saving id " + id)
  return dispatch =>
  {
    console.log(textBox);
    dispatch({type:'SAVE', id: id, textBox: textBox, slider:slider, textSelect: textSelect})
  }
}*/

export const selectGiph = (giph, props) =>
{
  return dispatch =>
  {
    console.log(giph, props);
    dispatch({type: "SELECT", payload: giph.embed_url, id: props.identifyer});
    if (props.editingCard == null) {
      dispatch({type:'SAVE', id: props.identifyer, textBox: giph.textBox})
    }
    else {
      dispatch({type:'SAVE', id: props.editingCard, textBox: giph.textBox})
    }
  }
}

export const edit = (id) =>
{
  console.log('edit id' + id)
  return dispatch =>
  {
    console.log('editing id' + id);
    dispatch({type:'EDIT', id: id})
  }
}

export const selectCard = (id) =>
{
  console.log('selectCard id ' + id);
  return dispatch =>
  {
    dispatch({type: 'SELECT_CARD', id: id});
    //dispatch({type:'EDIT', id: id});
  }
}

export const removeCard = (id) =>
{
  console.log('removeCard id ' + id);
  return dispatch =>
  {
    dispatch({type: 'REMOVE_CARD', id: id});
    //dispatch({type:'EDIT', id: id});
  }
}

/*export const edit = (id) =>
{
  console.log('edit id' + id)
  return dispatch =>
  {
    console.log('editing id' + id);
    dispatch({type:'EDIT', id: id})
  }
}

export const selectCard = (id) =>
{
  console.log('selectCard id ' + id);
  return dispatch =>
  {
    dispatch({type: 'SELECT_CARD', id: id});
  }
}

export const removeCards = 
*/

export const handleChange = (event) =>
{
  let obj = {type: 'HANDLE_CHANGE'}

  obj[event.target.id] = event.target.value;
  console.log(event.target.id);
    return dispatch =>
    {
      console.log(event.target);
      dispatch(obj);
  }
}
