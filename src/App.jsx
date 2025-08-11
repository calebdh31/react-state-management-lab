import "./App.css"
import { useState } from 'react'
function App() {

const [team, setTeam] = useState([])
const [money, setMoney] = useState(100)
const [zombieFighters, setZombieFighters] = useState(
[
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
)
const handleAddFighter = (character) => {
  console.log(character)
  if (money < character.price) {
    console.log("Not enough money!")
    return
    
  }
  setTeam(team => [...team, character])
  setMoney(money => [money - character.price])
}
let totalStrength = 0
  team.forEach(teamMember => {
  totalStrength+=teamMember.strength
})
let totalAgility = 0
  team.forEach(teamMember => {
  totalAgility+=teamMember.agility
})
const handleRemoveFighter = (character) => {
setTeam(team => [team - character.team])
}
// console.log(totalStrength)
  return (
    
    <ul>
      <h2>Money: ${money}</h2>
    <h2>{team.length === 0 ? "Pick some team members!" : ""}</h2>
    
    {zombieFighters.map((character) => (
      <li key={character.id}>
        <img src={character.img} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Price: {character.price}</p>
        <p>Strength: {character.strength}</p>
        <p>Agility: {character.agility}</p>
        <button onClick={() => handleAddFighter(character)}>Add</button>
      </li>
    ))}
    <h2>Your team:{team.length}</h2>
    {team.map((team) => (
      <li key={team}>
        <img src={team.img} alt={team.name} />
       <h3>{team.name}</h3>
        <p>Price: {team.price}</p>
        <p>Strength: {team.strength}</p>
        <p>Agility: {team.agility}</p>
        <button onClick={() => handleRemoveFighter(character)}>Remove</button>
    </li>
    ))}
    <h3>Total Strength: {totalStrength}</h3>
    <h3>Total Agility: {totalAgility}</h3>
    </ul>
  )

}

export default App
