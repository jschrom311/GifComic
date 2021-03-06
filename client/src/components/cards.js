import React from 'react';
//import {removeCards} from '../actions/protected-data';

import Editing from './editing';

//import './card.css';

export default function Cards(props) {
  console.log(props);



    return (
      <div className="comiccards">
      <article className="comic">
      {props.cards.map((g, i) => {
        console.log(g);
        let style = {flexBasis: Number(g.slider)}
        let removestyle = {display : 'none'}
        props.editingCard == i ? style.border = '10px solid white': '' ;
        props.editingCard == i ? removestyle.display  = 'block': '';
          let num = (Math.floor(Math.random() * 6) + 1) * 100
        return (
          <div onClick={()=>props.selectCard(i)} key={i} className='panel' style={style}>
          {g.id} {g.slider}
          <div onClick={()=>props.removeCard(i)} className='remove' style={removestyle}>X</div>

            <div className="container">
              <iframe
                src={g.giph}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
            </div>

            <div className={g.textSelect} contentEditable={props.editing}>
              {g.textBox}
            </div>
            

            {/*<Editing {...props} identifyer={i} butName='Edit'/> */}
        </div>
        )
      })}
    </article>
    </div>
    );
};
