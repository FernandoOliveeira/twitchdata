import React from 'react'

const gameCard = (props) => {

  return (
    <div className="col xl2 l3 m4 s6 ">
        <div className={`card ${props.div}`}>
            <div className="card-image" >
              <img src={props.imgSrc.replace('{width}', '480').replace('{height}', '790')} alt={props.alt}/>
              <span className={`card-title${props.imgSrc !== 'game_default.png'? ' hide': ''}`}>{props.title}</span>
            </div>
        </div>
    </div>
  )
}

gameCard.defaultProps = {
  title: 'Jogo não encontrado',
  alt: 'Nome do jogo não encontrado',
  imgSrc: 'game_default.png'

}


export default gameCard
