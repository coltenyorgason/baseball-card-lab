import playerData from './playerData.js'
import {useState} from 'react'

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)
  function turnCard() {
    setShowPicture(!showPicture)

  }
  if(showPicture){
    return (
      <div className="card" onClick={turnCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div> )
  } else {
    const statsDisplay = Object.entries(props.stats).map(([name, value])=> (
      <p>{name}: {value}</p>
      ))
    return (
      <div className='card' onClick={turnCard}>
    <h2>{props.name}</h2>
    <p>{props.position}</p>
    <p>{props.team}</p>
    {statsDisplay}
      </div>
    )
     }
  }
  
  




function App() {
  const cards = playerData.map((player) =>  (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));

  return <>{cards}</>;
}

export default App;
