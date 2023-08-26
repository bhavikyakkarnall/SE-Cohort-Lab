import { useState } from 'react'
import './App.css'
import Greeting from './components/Greetings'
import BigCat from './components/cats/BigCats'
import Emoji from './components/emoji/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name='Peter'>Good Monring!</Greeting>
      {/* <Greeting>Good Monring!</Greeting> */}

      <BigCat></BigCat>

      {/* <Emoji></Emoji> */}

    </>
  )
}

export default App
