import React from 'react';

import Search from './search.js';

export default function Editing(props) {
//  console.log(props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div>
        <button className="btn btn-light" onClick={()=>props.save(props.editingCard, props.textBox, props.slider, props.textSelect)}>Add Gif</button>
        <br/>
          <label>
             <input id="textBox" type="text" placeholder="Comic caption" onChange={props.handleChange} />
          </label>

          <div class="slidecontainer">
            {/*<p className="pslide">Comic panel size: </p>*/}
            <input type="range" min="200" max="1000" step="100" class="slider" id="slider" onChange={props.handleChange}/>
            <span id="pansize">{props.slider}</span>
          </div>
          <div className="pancap">
            {/*<p>Caption position: </p>*/}
          </div>
          <select id="textSelect" name="textLocation" onChange={props.handleChange}>
            <option value="text top-left">Top Left</option>
            <option value="text bottom-right">Bottom right</option>
            {/*<option value="speech-bubble">Speech Bubble</option> */}
          </select>

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
  return <button className="btn btn-light" onClick={()=>props.edit(props.editingCard)}>{props.butName}</button>
}
