/*import React from 'react';
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
} from '../reducers/counter';

const Home = props => (
  <div className="container-fluid">
    <h1>Home</h1> {props.giph} id {props.id}

      <Search searchGiphs={props.searchGiphs} />
{props.editingCard}
      <Editing {...props} butName={ (props.editingCard === null) ? 'New Cell' : 'edit' }/>

      <Cards {...props}/>

<button className="savebutton" onClick={()=>props.savecards(props)}>Save </button>

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
  textSelect: state.counter.textSelect
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);*/
