import React from 'react';

import Editing from './editing';

//import './card.css';

export default function Cards(props) {
  console.log(props);



    return (
      <article className="comic">
      {props.cards.map((g, i) => {
        console.log(g);
          let num = (Math.floor(Math.random() * 6) + 1) * 100
        return (
          <div onClick={()=>props.selectCard(i)} key={i} className='panel' style={{flexBasis: Number(g.slider)}}>
          {g.id} slider value{g.slider}

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
    );
};
