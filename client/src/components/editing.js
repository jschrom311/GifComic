import React from 'react';

import Search from './search.js';

export default function Editing(props) {
 console.log(this, props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div className="input-container">
            <input id="textBox" type="text" placeholder="Comic caption" onChange={props.handleChange} />
            <input type="range" min="200" max="1000" step="100" class="slider" id="slider" onChange={props.handleChange}/>
            <span id="pansize">{props.slider}</span>
            <select id="textSelect" name="textLocation" onChange={props.handleChange}>
                <option value="text top-left">Top Left</option>
                <option value="text bottom-right">Bottom right</option>
                {/*<option value="speech-bubble">Speech Bubble</option> */}
            </select>
        
        { props.giph ? <iframe
                key={'sup'}
                src={props.giph}
                width="40"
                height="30"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                id="display-giph"
                style={{pointerEvents:'none'}}
              />  : `` }
            

            <button id="addGif" className="btn btn-light" onClick={()=>props.save(props.editingCard, props.textBox, props.slider, props.textSelect)}>Add Gif</button>



      {/*  <Search searchGiphs={props.searchGiphs} /> */}
        {props.giphs.map((g, i) => {
      //    console.log(g);
          return (
            <div className="giphContainer" className='panel' id="createpanel" style={{flexBasis: Number(g.slider)}} onClick={() => props.selectGiph(g, props.identifyer)}>
              <iframe
                key={i}
                src={g.embed_url}
                width="40"
                height="30"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
          </div>
          )
        })}

    </div>
  )
  }
  return <button id="newCell" className="btn btn-light" onClick={()=>props.edit(props.editingCard)}>{props.butName}</button>
}
