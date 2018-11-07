import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search.js';
import Cards from './cards';
import Editing from './editing';
import {
  searchGiphs,
  selectGiph,
  save,
  edit,
  selectCard,
  handleChange,
  savecards,
  removecards,
} from '../reducers/counter';

const Home = props => (
  <div className="searchpage jumbotron" id="createcomicpg">
    {/*<h1><img src={require("./creategifcomic.png")} className="creategifcomic"></img></h1> {/*props.giph} {props.id*/}
    <h2>Here's your comic!</h2>
      <br></br>
      <Cards {...props}/>
    <div style={ { display: props.editing ? 'block' : 'none' } }  >
      <Search searchGiphs={props.searchGiphs} />
      </div>
        {/*props.editingCard*/}
      <Editing {...props} butName={ (props.editingCard === null) ? 'New Cell' : 'edit' }/>
      {/*<div style={ {display: props.editing ? 'block' : 'none'} } > 
      <button id ="removebutton" className="btn btn-light" onClick={()=> this.removecards()}>Remove a panel</button>
      </div>
<br></br>*/}
<button id="savebutton" className="btn btn-light" onClick={()=>props.savecards(props)}>Save Comic Strip!</button>

      
  </div>
);

const mapStateToProps = state => (
  {
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  cards: state.counter.cards,
  id: state.counter.id,
  editingCard: state.counter.editingCard,
  textBox: state.counter.textBox,
  slider: state.counter.slider,
  textSelect: state.counter.textSelect,
  selectedCard: state.counter.selectedCard
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchGiphs,
      selectGiph,
      save,
      edit,
      selectCard,
      handleChange,
      savecards,
      removecards,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
